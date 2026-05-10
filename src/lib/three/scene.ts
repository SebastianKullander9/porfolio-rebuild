import * as THREE from "three";
import { createBackground, updateBackground, resizeBackground } from "./background";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let controls: OrbitControls;
let animationId: number;
const clock = new THREE.Clock();

export function initScene(canvas: HTMLCanvasElement) {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
	camera.position.z = 3;

	renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
	renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
	renderer.setSize(window.innerWidth, window.innerHeight);

	controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true; // smooth inertia feeling
	controls.dampingFactor = 0.05;

	createBackground(scene);

	window.addEventListener("resize", onResize);

	tick();
}

function tick() {
	animationId = requestAnimationFrame(tick);
	updateBackground(clock.getElapsedTime());
	renderer.render(scene, camera);
}

function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	resizeBackground();
}

export function destroyScene() {
	cancelAnimationFrame(animationId);
	window.removeEventListener("resize", onResize);
	renderer.dispose();
}
