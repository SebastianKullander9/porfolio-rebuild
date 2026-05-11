<script lang="ts">
	import Hamburger from "./Hamburger.svelte";
	import { headerHeight } from "$lib/store/store";

	let height = $state(0);
	$effect(() => {
		headerHeight.set(height);
	});
</script>

<div
	bind:clientHeight={height}
	class="section-x-p section-y-p fixed z-30 flex w-full flex-row justify-between"
>
	<img src="/logo/sklogo.svg" alt="logo" width="75" height="75" />
	<Hamburger />
</div>
