<script lang="ts">
	import { flushSync, onMount } from 'svelte';
	import { crossfade, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import Icon from './Icon.svelte';
	import { navItems } from '#lib/data.ts';

	const [send, receive] = crossfade({ duration: 500, easing: expoOut });

	let menuOpen = $state(false);
	let scrolled = $state(false);
	let progress = $state(0);
	let active = $state('');
	let dark = $state(true);

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');

		let ticking = false;
		const update = () => {
			const max = document.documentElement.scrollHeight - innerHeight;
			scrolled = scrollY > 24;
			progress = max > 0 ? Math.min(1, scrollY / max) : 0;
			ticking = false;
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		};
		update();
		addEventListener('scroll', onScroll, { passive: true });
		addEventListener('resize', onScroll, { passive: true });

		// Scrollspy: highlight the section crossing the middle of the viewport.
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) if (entry.isIntersecting) active = entry.target.id;
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		for (const id of ['hero', ...navItems.map((n) => n.id)]) {
			const el = document.getElementById(id);
			if (el) io.observe(el);
		}

		return () => {
			removeEventListener('scroll', onScroll);
			removeEventListener('resize', onScroll);
			io.disconnect();
		};
	});

	function applyTheme(next: boolean) {
		dark = next;
		document.documentElement.classList.toggle('dark', next);
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light');
		} catch {
			// storage unavailable (private mode) — theme still applies for this visit
		}
	}

	function toggleTheme(event: MouseEvent) {
		const next = !dark;
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!('startViewTransition' in document) || reduce) {
			applyTheme(next);
			return;
		}
		// Circular reveal of the new theme, growing from the toggle button.
		const x = event.clientX || innerWidth - 48;
		const y = event.clientY || 40;
		const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
		const transition = document.startViewTransition(() => flushSync(() => applyTheme(next)));
		transition.ready.then(() => {
			document.documentElement.animate(
				{
					clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
				},
				{
					duration: 700,
					easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
					pseudoElement: '::view-transition-new(root)'
				}
			);
		});
	}
</script>

<div
	class="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-linear-to-r from-accent to-accent-2"
	style="transform: scaleX({progress})"
	aria-hidden="true"
></div>

<header
	class="fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 {scrolled ? 'pt-3' : 'pt-5'}"
>
	<div class="container-wide">
		<div
			class="flex h-14 items-center justify-between gap-4 rounded-full border pr-2 pl-4 transition-all duration-500 {scrolled ||
			menuOpen
				? 'border-line bg-bg/70 shadow-xl shadow-black/5 backdrop-blur-xl'
				: 'border-transparent'}"
		>
			<a href="#hero" class="flex items-center gap-2.5" aria-label="Back to top">
				<img src="/logo.png" alt="" class="h-7 w-auto" />
			</a>

			<nav class="hidden md:block" aria-label="Primary">
				<ul class="flex items-center gap-1">
					{#each navItems as item (item.id)}
						<li>
							<a
								href="#{item.id}"
								class="relative isolate block rounded-full px-4 py-2 text-sm transition-colors duration-300 {active ===
								item.id
									? 'text-fg'
									: 'text-muted hover:text-fg'}"
								aria-current={active === item.id ? 'true' : undefined}
							>
								{#if active === item.id}
									<span
										class="absolute inset-0 -z-10 rounded-full border border-line bg-elevated"
										in:receive={{ key: 'nav' }}
										out:send={{ key: 'nav' }}
									></span>
								{/if}
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="flex items-center gap-1.5">
				<button
					type="button"
					class="grid size-10 place-items-center overflow-hidden rounded-full text-muted transition-colors hover:bg-elevated hover:text-fg"
					onclick={toggleTheme}
					aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
				>
					{#key dark}
						<span
							class="col-start-1 row-start-1"
							in:fly={{ y: 14, duration: 450, easing: expoOut }}
						>
							<Icon name={dark ? 'sun' : 'moon'} class="size-[18px]" />
						</span>
					{/key}
				</button>

				<a href="#contact" class="btn btn-primary hidden h-10 px-5 sm:inline-flex">Let's talk</a>

				<button
					type="button"
					class="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-elevated hover:text-fg md:hidden"
					onclick={() => (menuOpen = !menuOpen)}
					aria-label="Toggle menu"
					aria-expanded={menuOpen}
				>
					<Icon name={menuOpen ? 'x' : 'menu'} />
				</button>
			</div>
		</div>

		{#if menuOpen}
			<nav
				class="mt-2 rounded-3xl border border-line bg-bg/90 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden"
				aria-label="Mobile"
				transition:fly={{ y: -10, duration: 350, easing: expoOut }}
			>
				{#each navItems as item, i (item.id)}
					<a
						href="#{item.id}"
						class="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg transition-colors hover:bg-elevated {active ===
						item.id
							? 'text-fg'
							: 'text-muted'}"
						onclick={() => (menuOpen = false)}
						in:fly={{ y: 10, duration: 400, delay: 40 * i, easing: expoOut }}
					>
						{item.label}
						<Icon name="arrow-up-right" class="size-4 text-subtle" />
					</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>
