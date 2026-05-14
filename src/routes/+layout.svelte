<script lang="ts">
	import "./style/layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/ui/header/Header.svelte";
	import { useLenis } from "$lib/utils/useLenis.svelte";

	let { children } = $props();

	useLenis();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}
