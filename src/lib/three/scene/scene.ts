import * as THREE from "three";
import { canvasConfig } from "$lib/config/sceneConfig";
import {
	createBackground,
	updateBackground,
	resizeBackground,
} from "../background/background";
import { loadModel, updateModel, resizeModel } from "../models/logo";

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let animationId: number;

function detectPerformanceTier(): "low" | "medium" | "high" {
	const gl = document.createElement("canvas").getContext("webgl");
	const gpuRenderer = gl?.getParameter(gl.RENDERER) ?? "";
	const isMobile = /Mobi/i.test(navigator.userAgent);

	if (isMobile) return "low";
	if (/intel/i.test(gpuRenderer)) return "medium";
	return "high";
}

export async function initScene(canvas: HTMLCanvasElement) {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		100
	);
	camera.position.set(...canvasConfig.CAMERA.position);

	const dirLight = new THREE.DirectionalLight(
		0xffffff,
		canvasConfig.DIRECTIONALLIGHT.intensity
	);
	dirLight.position.set(...canvasConfig.DIRECTIONALLIGHT.position);
	scene.add(dirLight);
	scene.add(new THREE.AmbientLight(0xffffff, 0.5));

	renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
	});
	renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
	renderer.setSize(window.innerWidth, window.innerHeight);

	createBackground(scene);
	const performanceTier = detectPerformanceTier();
	await loadModel(scene, performanceTier);

	window.addEventListener("resize", onResize);
	tick(0);
}

function tick(timestamp: number) {
	animationId = requestAnimationFrame(tick);
	const time = timestamp * 0.001;
	updateBackground(time);
	updateModel(time);
	renderer.render(scene, camera);
}

function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	resizeBackground();
	resizeModel();
}

export function destroyScene() {
	cancelAnimationFrame(animationId);
	window.removeEventListener("resize", onResize);
	renderer.dispose();
}
