import * as THREE from "three";
import vertexShader from "../shaders/background.vert?raw";
import fragmentShader from "../shaders/background.frag?raw";

let mesh: THREE.Mesh;
let material: THREE.ShaderMaterial;

export function createBackground(scene: THREE.Scene) {
	material = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		uniforms: {
			uTime: { value: 0 },
			uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
			uSpeed: { value: 0.25 },
			incline: { value: 0.3 },
			amplitude: { value: 0.5 },
		},
		depthWrite: false,
		depthTest: false,
	});

	const geometry = new THREE.PlaneGeometry(2, 2, 64, 64);
	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
}

export function updateBackground(time: number) {
	material.uniforms.uTime.value = time;
}

export function resizeBackground() {
	material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
}
