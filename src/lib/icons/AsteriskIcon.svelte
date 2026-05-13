<script lang="ts">
	let { size = 32, strokeWidth = 2, class: className = "" } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={className}
	viewBox="0 0 24 24"
>
	<g fill="currentColor">
		<path
			d="M12 3V21"
			stroke="currentColor"
			stroke-width={strokeWidth}
			stroke-linecap="square"
			fill="none"
		></path>
		<path
			d="M19.9907 7.37891L4.01009 16.6053"
			stroke="currentColor"
			stroke-width={strokeWidth}
			stroke-linecap="square"
			fill="none"
		></path>
		<path
			d="M20 16.605L4.01937 7.37856"
			stroke="currentColor"
			stroke-width={strokeWidth}
			stroke-linecap="square"
			fill="none"
		></path>
	</g>
</svg>
