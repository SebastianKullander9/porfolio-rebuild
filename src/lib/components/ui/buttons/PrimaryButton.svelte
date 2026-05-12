<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	import PlusIcon from "$lib/icons/PlusIcon.svelte";

	gsap.registerPlugin(SplitText);

	let container: HTMLElement;
	let splits: SplitText[];
	let tl: gsap.core.Timeline;

	onMount(() => {
		const textElements = container.querySelectorAll("p");

		splits = Array.from(textElements).map(
			(text) => new SplitText(text, { type: "chars" })
		);

		tl = gsap.timeline({ paused: true });

		splits.forEach((split) => {
			tl.to(split.chars, { y: "-100%", stagger: 0.02 }, 0);
		});
	});

	onDestroy(() => {
		tl?.kill();
		splits?.forEach((split) => split.revert());
	});

	let handleEnter = () => {
		tl.play();
	};

	let handleLeave = () => {
		tl.reverse();
	};
</script>

<button
	bind:this={container}
	class="text-large group flex flex-row items-center overflow-hidden text-white"
	onmouseenter={handleEnter}
	onmouseleave={handleLeave}
>
	<div class="relative overflow-hidden">
		<p>Test text</p>
		<p class="absolute">Test test</p>
	</div>
	<div
		class="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-white/20 p-6 backdrop-blur-sm transition-all group-hover:p-5"
	>
		<div class="">
			<img
				src="/svgs/white-star.svg"
				alt=""
				width={25}
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
			<PlusIcon
				size={16}
				class="text-white transition-transform group-hover:scale-50"
				strokeWidth={4}
			/>
		</div>
	</div>
</button>
