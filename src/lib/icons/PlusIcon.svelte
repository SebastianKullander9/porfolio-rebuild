<script lang="ts">
	let { size = 32, strokeWidth = 2, class: className = "" } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={className}
	viewBox="0 0 32 32"
>
	<line
		x1="29"
		y1="16"
		x2="3"
		y2="16"
		fill="none"
		stroke="currentColor"
		stroke-linecap="square"
		stroke-miterlimit="10"
		stroke-width={strokeWidth}
	></line>
	<line
		x1="16"
		y1="3"
		x2="16"
		y2="29"
		fill="none"
		stroke="currentColor"
		stroke-linecap="square"
		stroke-miterlimit="10"
		stroke-width={strokeWidth}
	></line>
</svg>
