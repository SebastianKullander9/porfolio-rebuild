import { onMount, onDestroy, tick } from "svelte";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useProjectScroll(
	getSections: () => HTMLElement[],
	getSentinel: () => HTMLElement
) {
	onMount(async () => {
		await tick();

		const sections = getSections();
		const sentinel = getSentinel();
		const dividerEl =
			sections[0].querySelector<HTMLElement>(":first-child");
		const D = dividerEl?.offsetHeight ?? 0;

		const images = sections.flatMap((el) =>
			Array.from(el.querySelectorAll("img"))
		);
		await Promise.all(
			images.map((img) =>
				img.complete
					? Promise.resolve()
					: new Promise((r) => (img.onload = r))
			)
		);

		sections.forEach((el, i) => {
			const isLast = i === sections.length - 1;
			const naturalHeight = el.offsetHeight;

			ScrollTrigger.create({
				trigger: el,
				start: `top ${D * i}px`,
				endTrigger: sentinel,
				end: "bottom bottom",
				pin: true,
				pinSpacing: isLast,
				...(!isLast && {
					onLeave: () => gsap.set(el, { height: D }),
					onEnterBack: () => gsap.set(el, { height: D }),
				}),
			});

			if (!isLast) {
				const next = sections[i + 1];
				gsap.fromTo(
					el,
					{ height: naturalHeight },
					{
						height: D,
						ease: "none",
						scrollTrigger: {
							trigger: next,
							start: `top ${naturalHeight + D * i}px`,
							end: `top ${D * (i + 1)}px`,
							scrub: true,
							onLeave: () => gsap.set(el, { height: D }),
							onEnterBack: () =>
								gsap.set(el, { height: naturalHeight }),
							onLeaveBack: () =>
								gsap.set(el, { height: naturalHeight }),
						},
					}
				);
			}
		});

		ScrollTrigger.create({
			trigger: sentinel,
			start: "top bottom",
			onEnter: () =>
				sections
					.slice(0, -1)
					.forEach((el) => gsap.set(el, { height: D })),
			onLeaveBack: () =>
				sections
					.slice(0, -1)
					.forEach((el) => gsap.set(el, { height: D })),
		});
	});

	onDestroy(() => {
		ScrollTrigger.getAll().forEach((t) => t.kill());
		ScrollTrigger.clearScrollMemory();
	});
}
