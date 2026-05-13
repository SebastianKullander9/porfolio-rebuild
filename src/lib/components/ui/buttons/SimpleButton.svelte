<script lang="ts">
	import PlusIcon from "$lib/icons/PlusIcon.svelte";
	import { cn } from "$lib/utils/utils";
</script>

<button
	aria-label="placeholder"
	type="button"
	class="group z-20 h-15 w-15"
>
	<div
		class={cn(
			"relative h-full w-full cursor-pointer rounded-full",
			"border border-white bg-white/20 text-white backdrop-blur-sm",
			"transition-transform group-hover:scale-85"
		)}
	>
		<img
			src="/svgs/white-star.svg"
			alt=""
			aria-hidden="true"
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
</button>
