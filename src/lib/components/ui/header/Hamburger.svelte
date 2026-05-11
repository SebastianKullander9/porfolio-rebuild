<script>
	import "./Hamburger.css";

	let menuOpen = $state(false);
	let isAnimating = false;

	function handleClick() {
		if (isAnimating) return;
		menuOpen = !menuOpen;
	}
</script>

<button
	type="button"
	class="group z-10 cursor-pointer"
	onclick={handleClick}
	aria-label="Open page navigation"
>
	<div class="menu-icon">
		<div class="menu-icon-cross absolute inset-0" class:open={menuOpen}>
			<div
				class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform duration-300 group-hover:h-8 group-hover:w-8"
			>
				<img src="/svgs/white-star.svg" alt="" width={100} height={100} />
			</div>
			<span class="dot top-left"></span>
			<span class="dot top-right"></span>
			<span class="dot bottom-left"></span>
			<span class="dot bottom-right"></span>
		</div>
	</div>
</button>
