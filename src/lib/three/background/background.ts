import * as THREE from "three";
import { planeConfig } from "$lib/config/sceneConfig";
import vertexShader from "../../shaders/background.vert?raw";
import fragmentShader from "../../shaders/background.frag?raw";

let mesh: THREE.Mesh;
let material: THREE.ShaderMaterial;

export function createBackground(scene: THREE.Scene) {
	material = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		uniforms: {
			uTime: { value: planeConfig.UNIFORMS.uTime },
			uResolution: {
				value: new THREE.Vector2(
					window.innerWidth,
					window.innerHeight
				),
			},
			uSpeed: { value: planeConfig.UNIFORMS.uSpeed },
			incline: { value: planeConfig.UNIFORMS.incline },
			amplitude: { value: planeConfig.UNIFORMS.amplitude },
		},
		depthWrite: false,
		depthTest: false,
	});

	const [w, h, segW, segH] = planeConfig.PLANE.geometry;
	const geometry = new THREE.PlaneGeometry(w, h, segW, segH);
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(...planeConfig.PLANE.position);
	mesh.rotation.set(...planeConfig.PLANE.rotation);
	scene.add(mesh);
}

export function updateBackground(time: number) {
	material.uniforms.uTime.value = time;
}

export function resizeBackground() {
	material.uniforms.uResolution.value.set(
		window.innerWidth,
		window.innerHeight
	);
}
