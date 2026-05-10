<script lang="ts">
	import "./style/layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/ui/header/Header.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}
