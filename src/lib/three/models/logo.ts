import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

let model: THREE.Group;
export function loadModel(scene: THREE.Scene): Promise<void> {
	return new Promise((resolve, reject) => {
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");

		const loader = new GLTFLoader();
		loader.setDRACOLoader(dracoLoader);

		loader.load(
			"/models/logo.glb",
			(gltf) => {
				model = gltf.scene;
				scene.add(model);
				resolve();
			},
			undefined,
			(error) => reject(error)
		);
	});
}

export function updateModel(time: number) {
	if (!model) return;
	model.rotation.y = time * 0.5;
}
