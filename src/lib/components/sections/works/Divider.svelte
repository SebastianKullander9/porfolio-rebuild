<script lang="ts">
	let {
		index,
		year,
		height = $bindable(0),
	} = $props<{
		index: number;
		year: string;
		height?: number;
	}>();
</script>

<div
	bind:clientHeight={height}
	class="text-large flex w-full flex-row justify-between border-t border-white py-12 text-white"
>
	<p>0{index + 1}</p>
	<p>{year}</p>
</div>
