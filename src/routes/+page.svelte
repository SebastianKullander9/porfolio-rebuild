<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { initScene, destroyScene } from "$lib/three/scene/scene";

	let canvas: HTMLCanvasElement;

	onMount(async () => await initScene(canvas));
	onDestroy(() => destroyScene());
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
</style>
