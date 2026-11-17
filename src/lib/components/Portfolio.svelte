<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { projects, socials, type Project } from '#lib/data.ts';

	let dialog = $state<HTMLDialogElement>();
	let active = $state<Project | null>(null);
	let shot = $state(0);

	const gallery = $derived(
		active
			? active.screenshots?.length
				? active.screenshots
				: [{ image: active.image, title: active.title }]
			: []
	);

	const pad = (n: number) => String(n).padStart(2, '0');

	function open(project: Project) {
		active = project;
		shot = 0;
		dialog?.showModal();
	}

	function close() {
		dialog?.close();
	}

	function go(step: number) {
		shot = (shot + step + gallery.length) % gallery.length;
	}

	function onKeydown(e: KeyboardEvent) {
		if (gallery.length < 2) return;
		if (e.key === 'ArrowRight') go(1);
		else if (e.key === 'ArrowLeft') go(-1);
	}
</script>

{#snippet browserFrame(project: Project, tall: boolean)}
	<div
		class="relative overflow-hidden border-line bg-elevated {tall
			? 'aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-80'
			: 'aspect-16/10'}"
	>
		<div
			class="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-1.5 border-b border-line bg-surface/85 px-4 backdrop-blur"
		>
			<span class="size-2.5 rounded-full bg-line-strong"></span>
			<span class="size-2.5 rounded-full bg-line-strong"></span>
			<span class="size-2.5 rounded-full bg-line-strong"></span>
		</div>
		<img
			src={project.image}
			alt={project.title}
			class="absolute inset-0 size-full object-cover object-top pt-8 transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
			loading="lazy"
		/>
		<div
			class="absolute inset-0 z-10 grid place-items-center bg-bg/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
		>
			<span
				class="inline-flex translate-y-3 items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform duration-500 group-hover:translate-y-0"
			>
				View project <Icon name="arrow-up-right" class="size-4" />
			</span>
		</div>
	</div>
{/snippet}

<section id="portfolio" class="section">
	<div class="container-x">
		<SectionHeading
			eyebrow="Selected work"
			title="Projects I've"
			highlight="built."
			description="A showcase of my recent projects demonstrating expertise in full-stack development, modern web technologies, and user-centered design principles."
		/>

		<div class="grid gap-5 md:grid-cols-2">
			{#each projects as project, i (project.title)}
				{@const featured = i === 0}
				<div class={featured ? 'md:col-span-2' : ''} data-reveal style="--d: {(i % 2) * 120}ms">
					<button
						type="button"
						class="card spotlight group block h-full w-full overflow-hidden text-left {featured
							? 'lg:grid lg:grid-cols-[1.35fr_1fr]'
							: ''}"
						data-spotlight
						onclick={() => open(project)}
					>
						<div class="border-line {featured ? 'border-b lg:border-r lg:border-b-0' : 'border-b'}">
							{@render browserFrame(project, featured)}
						</div>
						<div class="flex flex-col p-6 md:p-7 {featured ? 'lg:justify-center lg:p-10' : ''}">
							<div class="flex items-center justify-between font-mono text-xs text-subtle">
								<span>{pad(i + 1)} / {pad(projects.length)}</span>
								<span class="inline-flex items-center gap-1.5">
									{#if project.status === 'Live'}
										<span class="size-1.5 animate-pulse rounded-full bg-emerald-400"></span>
									{/if}
									{project.category}
								</span>
							</div>
							<h3
								class="mt-4 font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent {featured
									? 'text-2xl lg:text-3xl'
									: 'text-xl'}"
							>
								{project.title}
							</h3>
							<p class="mt-1 text-sm text-subtle">{project.subtitle}</p>
							<p
								class="mt-4 text-sm leading-relaxed text-muted {featured
									? 'line-clamp-4'
									: 'line-clamp-2'}"
							>
								{project.description}
							</p>
							<div class="mt-6 flex flex-wrap gap-2">
								{#each project.tech as tech (tech)}
									<span class="chip">{tech}</span>
								{/each}
							</div>
						</div>
					</button>
				</div>
			{/each}
		</div>

		<div class="mt-14 flex justify-center" data-reveal>
			<a
				href={socials[0].href}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-ghost group"
			>
				<Icon name="github" class="size-4" />
				More on GitHub
				<Icon
					name="arrow-up-right"
					class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</a>
		</div>
	</div>
</section>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	class="project-dialog"
	aria-labelledby="project-dialog-title"
	onclick={(e) => e.target === dialog && close()}
	onkeydown={onKeydown}
>
	{#if active}
		<div class="flex max-h-[92dvh] flex-col">
			<header class="flex items-start justify-between gap-4 border-b border-line p-5 md:px-7">
				<div>
					<p class="font-mono text-xs tracking-widest text-accent uppercase">{active.category}</p>
					<h3
						id="project-dialog-title"
						class="mt-1.5 text-xl font-semibold tracking-tight md:text-2xl"
					>
						{active.title}
					</h3>
					<p class="text-sm text-muted">{active.subtitle}</p>
				</div>
				<button type="button" class="icon-btn shrink-0" onclick={close} aria-label="Close">
					<Icon name="x" class="size-[18px]" />
				</button>
			</header>

			<div class="overflow-y-auto overscroll-contain">
				<div class="p-5 md:px-7">
					<div
						class="relative aspect-video overflow-hidden rounded-xl border border-line bg-elevated"
					>
						{#key `${active.title}-${shot}`}
							<img
								src={gallery[shot].image}
								alt={gallery[shot].title}
								class="absolute inset-0 size-full object-contain"
								in:fade={{ duration: 350 }}
							/>
						{/key}
						{#if gallery.length > 1}
							<button
								type="button"
								class="icon-btn absolute top-1/2 left-3 -translate-y-1/2 bg-bg/70 backdrop-blur"
								onclick={() => go(-1)}
								aria-label="Previous screenshot"
							>
								<Icon name="chevron-left" class="size-5" />
							</button>
							<button
								type="button"
								class="icon-btn absolute top-1/2 right-3 -translate-y-1/2 bg-bg/70 backdrop-blur"
								onclick={() => go(1)}
								aria-label="Next screenshot"
							>
								<Icon name="chevron-right" class="size-5" />
							</button>
							<span
								class="absolute right-3 bottom-3 rounded-full bg-bg/70 px-3 py-1 font-mono text-xs text-muted backdrop-blur"
							>
								{shot + 1} / {gallery.length}
							</span>
						{/if}
					</div>
					<p class="mt-3 text-center text-sm text-muted">{gallery[shot].title}</p>

					{#if gallery.length > 1}
						<div class="mt-4 flex gap-2 overflow-x-auto pb-2">
							{#each gallery as item, i (item.image)}
								<button
									type="button"
									class="shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 {i ===
									shot
										? 'border-accent'
										: 'border-transparent opacity-50 hover:opacity-100'}"
									onclick={() => (shot = i)}
									aria-label="Show {item.title}"
								>
									<img
										src={item.image}
										alt=""
										class="h-14 w-24 object-cover object-top"
										loading="lazy"
									/>
								</button>
							{/each}
						</div>
					{/if}
				</div>

				<div class="grid gap-8 border-t border-line p-5 md:grid-cols-[1fr_14rem] md:px-7 md:py-6">
					<div>
						<p class="font-mono text-xs tracking-widest text-subtle uppercase">Overview</p>
						<p class="mt-3 leading-relaxed text-muted">{active.description}</p>
					</div>
					<div class="space-y-6">
						<div>
							<p class="font-mono text-xs tracking-widest text-subtle uppercase">Stack</p>
							<div class="mt-3 flex flex-wrap gap-2">
								{#each active.tech as tech (tech)}
									<span class="chip">{tech}</span>
								{/each}
							</div>
						</div>
						<div>
							<p class="font-mono text-xs tracking-widest text-subtle uppercase">Status</p>
							<p class="mt-2 inline-flex items-center gap-2 text-sm">
								<span
									class="size-2 rounded-full {active.status === 'Live'
										? 'bg-emerald-400'
										: 'bg-accent'}"
								></span>
								{active.status}
							</p>
						</div>
					</div>
				</div>
			</div>

			<footer class="flex flex-wrap gap-3 border-t border-line p-5 md:px-7">
				{#if active.links.demo}
					<a
						href={active.links.demo}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary h-11"
					>
						<Icon name="external" class="size-4" />
						Live site
					</a>
				{/if}
				{#if active.links.github}
					<a
						href={active.links.github}
						target="_blank"
						rel="noopener noreferrer"
						class="btn h-11 {active.links.demo ? 'btn-ghost' : 'btn-primary'}"
					>
						<Icon name="github" class="size-4" />
						Source code
					</a>
				{/if}
			</footer>
		</div>
	{/if}
</dialog>
