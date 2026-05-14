<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { initScene, destroyScene } from "$lib/three/scene/scene";
	import Hero from "$lib/components/sections/hero/Hero.svelte";
	import About from "$lib/components/sections/about/About.svelte";
	import Works from "$lib/components/sections/works/Works.svelte";

	let canvas: HTMLCanvasElement;

	onMount(async () => await initScene(canvas));
	onDestroy(() => destroyScene());
</script>

<canvas bind:this={canvas}></canvas>
<div class="relative z-40">
	<Hero />
	<About />
	<Works />
</div>

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
