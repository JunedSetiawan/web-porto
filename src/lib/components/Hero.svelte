<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import Icon from './Icon.svelte';
	import { profile, roles, skills, socials } from '#lib/data.ts';

	let roleIndex = $state(0);
	let tilt = $state({ x: 0, y: 0 });

	function onTilt(e: PointerEvent) {
		if (e.pointerType !== 'mouse') return;
		const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
		tilt = {
			x: -((e.clientY - r.top) / r.height - 0.5) * 8,
			y: ((e.clientX - r.left) / r.width - 0.5) * 8
		};
	}

	function resetTilt() {
		tilt = { x: 0, y: 0 };
	}

	onMount(() => {
		const id = setInterval(() => (roleIndex = (roleIndex + 1) % roles.length), 2800);
		return () => clearInterval(id);
	});
</script>

<section id="hero" class="relative isolate flex min-h-svh flex-col justify-center pt-32 pb-12">
	<!-- Background -->
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
		<div
			class="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_20%,transparent_75%)]"
		></div>
		<div
			class="absolute -top-48 left-1/2 h-144 w-240 -translate-x-1/2 animate-aurora rounded-full bg-accent/20 blur-[120px]"
		></div>
		<div
			class="absolute top-1/3 -right-40 size-112 animate-aurora rounded-full bg-accent-2/15 blur-[120px] [animation-delay:-8s]"
		></div>
		<div class="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-bg"></div>
	</div>

	<div class="container-wide grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
		<!-- Copy -->
		<div>
			<div data-reveal>
				<span
					class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-2 text-xs text-muted backdrop-blur"
				>
					<span class="relative flex size-2.5">
						<span class="absolute inset-0 animate-ping rounded-full bg-emerald-400/70"></span>
						<span class="relative size-2.5 rounded-full bg-emerald-400"></span>
					</span>
					Available for freelance & full-time work
				</span>
			</div>

			<h1 class="mt-8 font-semibold tracking-tighter">
				<span class="block text-2xl font-normal tracking-tight text-muted sm:text-3xl">
					<span
						class="inline-block overflow-hidden pb-1 align-bottom"
						data-reveal="mask"
						style="--d: 100ms"
					>
						<span class="inline-block">Hi, I'm</span>
					</span>
				</span>
				<span class="mt-2 block text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
					<span
						class="inline-block overflow-hidden pb-2 align-bottom"
						data-reveal="mask"
						style="--d: 200ms"
					>
						<span class="inline-block">Juned</span>
					</span>
					<span
						class="inline-block overflow-hidden pb-2 align-bottom"
						data-reveal="mask"
						style="--d: 300ms"
					>
						<span class="text-accent-gradient inline-block"> Setiawan </span>
					</span>
				</span>
			</h1>

			<p
				class="mt-6 flex flex-wrap items-baseline gap-x-2 text-xl text-muted sm:text-2xl"
				data-reveal
				style="--d: 450ms"
			>
				<span>Laravel & full-stack developer building</span>
				<span class="relative inline-grid overflow-hidden font-medium text-fg">
					{#key roleIndex}
						<span
							class="col-start-1 row-start-1 whitespace-nowrap"
							in:fly={{ y: '100%', duration: 700, easing: expoOut }}
							out:fly={{ y: '-100%', duration: 700, easing: expoOut }}
						>
							{roles[roleIndex]}
						</span>
					{/key}
				</span>
			</p>

			<p
				class="mt-6 max-w-xl text-base text-pretty text-muted sm:text-lg"
				data-reveal
				style="--d: 550ms"
			>
				Passionate about creating efficient and innovative web solutions with expertise in Laravel,
				modern web technologies, and user-centered design principles.
			</p>

			<div class="mt-10 flex flex-wrap items-center gap-3" data-reveal style="--d: 650ms">
				<a href="#portfolio" class="btn btn-primary group">
					View my work
					<Icon name="arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
				</a>
				<a href="#contact" class="btn btn-ghost">Get in touch</a>
			</div>

			<div class="mt-10 flex items-center gap-3" data-reveal style="--d: 750ms">
				{#each socials as social (social.label)}
					<a
						href={social.href}
						target={social.href.startsWith('http') ? '_blank' : undefined}
						rel="noopener noreferrer"
						class="icon-btn"
						aria-label={social.label}
					>
						<Icon name={social.icon} class="size-[18px]" />
					</a>
				{/each}
				<span class="ml-2 hidden items-center gap-1.5 text-sm text-subtle sm:inline-flex">
					<Icon name="map-pin" class="size-4" />
					Based in {profile.location}
				</span>
			</div>
		</div>

		<!-- Portrait -->
		<div
			class="relative mx-auto w-full max-w-60 sm:max-w-68 lg:mr-6 lg:max-w-76"
			data-reveal="scale"
			style="--d: 300ms"
		>
			<!-- soft glow -->
			<div
				class="absolute -inset-8 -z-10 rounded-[3rem] bg-linear-to-tr from-accent/30 via-accent-2/15 to-transparent opacity-80 blur-3xl"
				aria-hidden="true"
			></div>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="relative [perspective:1200px]" onpointermove={onTilt} onpointerleave={resetTilt}>
				<div
					class="relative transition-transform duration-500 ease-out [transform-style:preserve-3d]"
					style="transform: rotateX({tilt.x}deg) rotateY({tilt.y}deg)"
				>
					<!-- offset outline frame -->
					<div
						class="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.25rem] border border-line-strong"
						aria-hidden="true"
					>
						<span class="absolute -top-1 -left-1 size-2 rounded-full bg-accent"></span>
						<span class="absolute -right-1 -bottom-1 size-2 rounded-full bg-accent-2"></span>
					</div>

					<!-- photo with animated gradient border -->
					<div
						class="relative overflow-hidden rounded-[2.25rem] p-[1.5px] shadow-2xl shadow-black/20"
					>
						<div
							class="absolute top-1/2 left-1/2 size-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,var(--accent)_70deg,var(--accent-2)_120deg,transparent_180deg)]"
							aria-hidden="true"
						></div>
						<div class="group relative overflow-hidden rounded-[calc(2.25rem-1.5px)] bg-elevated">
							<img
								src={profile.photo}
								alt={profile.name}
								class="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
								fetchpriority="high"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
								aria-hidden="true"
							></div>

							<!-- caption -->
							<div
								class="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white backdrop-blur-md"
							>
								<div class="min-w-0">
									<p class="truncate text-sm font-semibold">{profile.name}</p>
									<p class="truncate text-xs text-white/70">Web Developer · {profile.location}</p>
								</div>
								<span
									class="grid size-9 shrink-0 place-items-center rounded-full bg-white text-black"
									aria-hidden="true"
								>
									<Icon name="code" class="size-4" strokeWidth={2} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Tech marquee -->
	<div class="container-wide mt-20 lg:mt-28" data-reveal style="--d: 900ms">
		<p class="mb-6 text-center font-mono text-xs tracking-[0.2em] text-subtle uppercase">
			Technologies I work with
		</p>
		<div
			class="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
		>
			{#each [0, 1] as copy (copy)}
				<ul
					class="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
					aria-hidden={copy === 1}
				>
					{#each skills as skill (skill.name)}
						<li class="flex items-center gap-2.5 text-sm whitespace-nowrap text-muted">
							<img
								src={skill.icon}
								alt=""
								class="size-6 object-contain opacity-80 {skill.invertDark ? 'dark:invert' : ''}"
								loading="lazy"
							/>
							{skill.name}
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</div>
</section>
