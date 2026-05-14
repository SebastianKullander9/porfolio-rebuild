<script lang="ts">
	import { get } from "svelte/store";
	import { dividerHeight } from "$lib/store/store";
	import { useProjectScroll } from "./useProjectScroll.svelte.ts";
	import Divider from "./Divider.svelte";
	import { projectData } from "./data";
	import SimpleButton from "$lib/components/ui/buttons/SimpleButton.svelte";

	let sectionRefs: HTMLElement[] = [];
	let sentinel: HTMLElement;
	let dividerHeightPx = $state(0);

	useProjectScroll(
		() => sectionRefs,
		() => sentinel
	);
</script>

<div>
	{#each projectData as project, i (i)}
		<section
			bind:this={sectionRefs[i]}
			class="section-x-p overflow-hidden"
		>
			<Divider
				index={i}
				year={project.year}
				bind:height={dividerHeightPx}
			/>
			<div
				class="gap-large grid grid-cols-12 will-change-transform backface-hidden"
				style="padding-bottom: {dividerHeightPx}px"
			>
				<div class="col-span-12 md:col-span-7">
					<div class="w-full overflow-hidden rounded-3xl">
						<img
							src={project.imgUrl}
							alt=""
							class="w-full object-contain"
						/>
					</div>
				</div>
				<div
					class="gap-large relative col-span-12 flex flex-col p-8 text-white md:col-span-5 md:items-center md:justify-center"
				>
					<div class="gap-extralarge flex flex-col">
						<p
							class="heading-primary text-3xl font-semibold md:text-7xl"
						>
							{project.title}
						</p>
						<div class="gap-base flex max-w-[40ch] flex-col">
							<p class="text-large">{project.tags}</p>
							<p class="text-medium">{project.text}</p>
						</div>
					</div>
					<div
						class="flex justify-end md:absolute md:right-0 md:bottom-0"
					>
						<SimpleButton />
					</div>
				</div>
			</div>
		</section>
	{/each}

	<div bind:this={sentinel} class="h-[40vh] w-full"></div>
</div>
