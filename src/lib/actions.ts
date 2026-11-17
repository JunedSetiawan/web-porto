/** Animates a number from 0 to `value` the first time the element scrolls into view. */
export function countUp(node: HTMLElement, value: number) {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	let raf = 0;
	node.textContent = '0';

	const io = new IntersectionObserver(([entry]) => {
		if (!entry.isIntersecting) return;
		io.disconnect();
		const start = performance.now();
		const duration = 1600;
		const tick = (now: number) => {
			const p = Math.min(1, (now - start) / duration);
			node.textContent = String(Math.round(value * (1 - Math.pow(1 - p, 4))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
	});
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
			cancelAnimationFrame(raf);
		}
	};
}
