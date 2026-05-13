<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	import PlusIcon from "$lib/icons/PlusIcon.svelte";
	import { cn } from "$lib/utils/utils";

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

	let { text = "Primary Button" } = $props<{
		text?: string;
	}>();
</script>

<button
	bind:this={container}
	class="group primary-button flex cursor-pointer flex-row items-center gap-md overflow-hidden"
	onmouseenter={handleEnter}
	onmouseleave={handleLeave}
>
	<div class="relative overflow-hidden leading-none">
		<p>{text}</p>
		<p class="absolute">{text}</p>
	</div>
	<div class="h-10 w-10">
		<div
			class={cn(
				"flex h-full w-full items-center justify-center rounded-full ",
				"border border-white bg-white/20 backdrop-blur-sm",
				"transition-all group-hover:scale-85"
			)}
		>
			<div class="relative h-full w-full">
				<img
					src="/svgs/white-star.svg"
					alt=""
					width={20}
					class={cn(
						"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
						"scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
					)}
				/>
				<PlusIcon
					size={16}
					class={cn(
						"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
						"transition-transform group-hover:scale-50"
					)}
					strokeWidth={4}
				/>
			</div>
		</div>
	</div>
</button>
