import { onMount, onDestroy } from "svelte";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export function useLenis() {
	onMount(() => {
		const lenis = new Lenis();

		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			gsap.ticker.remove((time) => lenis.raf(time * 1000));
		};
	});
}
