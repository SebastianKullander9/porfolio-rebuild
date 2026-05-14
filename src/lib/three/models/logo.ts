import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { modelConfig } from "$lib/config/sceneConfig";

const { POSITION, ROTATION, SCALE, BOBBINGDISTANCE, BOBBINGSPEED } =
	modelConfig.LOGO;
const { TRANSMISSION_MATERIAL, PHYSICAL_MATERIAL, COLOR } =
	modelConfig.MATERIAL;

let model: THREE.Mesh;
let material: THREE.Material;

function getResponsive() {
	const vw = window.innerWidth;
	return {
		scale:
			vw < 768
				? SCALE.MOBILE
				: vw < 1024
					? SCALE.TABLET
					: SCALE.DESKTOP,
		position:
			vw < 768
				? POSITION.MOBILE
				: vw < 1024
					? POSITION.TABLET
					: POSITION.DESKTOP,
	};
}

function createMaterial(
	performanceTier: "low" | "medium" | "high"
): THREE.Material {
	const color = new THREE.Color(COLOR);
	switch (performanceTier) {
		case "low":
		case "medium":
			return new THREE.MeshPhysicalMaterial({
				...PHYSICAL_MATERIAL,
				color,
				transparent: true,
			});
		case "high":
		default:
			return new THREE.MeshPhysicalMaterial({
				...TRANSMISSION_MATERIAL,
				color,
				transparent: true,
			});
	}
}

export function loadModel(
	scene: THREE.Scene,
	performanceTier: "low" | "medium" | "high" = "high"
): Promise<void> {
	return new Promise((resolve, reject) => {
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath(
			"https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
		);

		const loader = new GLTFLoader();
		loader.setDRACOLoader(dracoLoader);

		material = createMaterial(performanceTier);

		loader.load(
			"/models/logo.glb",
			(gltf) => {
				gltf.scene.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						model = new THREE.Mesh(child.geometry, material);

						const { scale, position } = getResponsive();
						model.position.set(...position);
						model.scale.set(...scale);
						model.rotation.set(...ROTATION);

						scene.add(model);
					}
				});
				resolve();
			},
			undefined,
			(error) => reject(error)
		);
	});
}

export function updateModel(time: number) {
	if (!model) return;
	const baseY = POSITION.DESKTOP[1];
	model.position.y =
		baseY + Math.sin(time * BOBBINGSPEED) * BOBBINGDISTANCE;
}

export function resizeModel() {
	if (!model) return;
	const { scale, position } = getResponsive();
	model.scale.set(...scale);
	model.position.set(...position);
}
