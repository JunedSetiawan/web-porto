<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		// Scroll reveal: any element with [data-reveal] fades/slides in once it enters the viewport.
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('revealed');
					io.unobserve(entry.target);
				}
			},
			{ rootMargin: '0px 0px -8% 0px' }
		);
		const scan = () =>
			document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => io.observe(el));
		scan();
		const mo = new MutationObserver(scan);
		mo.observe(document.body, { childList: true, subtree: true });

		// Spotlight: feed the pointer position to the hovered [data-spotlight] element.
		const onMove = (e: PointerEvent) => {
			const el = (e.target as Element | null)?.closest?.<HTMLElement>('[data-spotlight]');
			if (!el) return;
			const rect = el.getBoundingClientRect();
			el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
			el.style.setProperty('--my', `${e.clientY - rect.top}px`);
		};
		document.addEventListener('pointermove', onMove, { passive: true });

		return () => {
			io.disconnect();
			mo.disconnect();
			document.removeEventListener('pointermove', onMove);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		{@render children()}
	</main>
	<Footer />
</div>
