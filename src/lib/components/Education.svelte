<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import type { IconName } from '#lib/icons.ts';
	import {
		achievementHighlights,
		achievements,
		certificates,
		education,
		experience,
		type TimelineItem
	} from '#lib/data.ts';

	type Tab = 'Education' | 'Experience' | 'Achievement' | 'Certificate';
	const tabs: { id: Tab; icon: IconName }[] = [
		{ id: 'Education', icon: 'graduation' },
		{ id: 'Experience', icon: 'briefcase' },
		{ id: 'Achievement', icon: 'trophy' },
		{ id: 'Certificate', icon: 'award' }
	];
	const timelines: Partial<Record<Tab, TimelineItem[]>> = {
		Education: education,
		Experience: experience,
		Achievement: achievements
	};

	let activeTab = $state<Tab>('Education');
	const [send, receive] = crossfade({ duration: 500, easing: expoOut });
</script>

<section id="education" class="section">
	<div class="container-x">
		<SectionHeading
			eyebrow="Journey"
			title="Education &"
			highlight="experience."
			description="My educational background and achievements that shaped my expertise in web development and technology."
		/>

		<div data-reveal>
			<div
				class="inline-grid w-full grid-cols-2 gap-1 rounded-3xl border border-line bg-surface/60 p-1.5 sm:w-auto sm:grid-cols-4 sm:rounded-full"
				role="tablist"
				aria-label="Journey categories"
			>
				{#each tabs as tab (tab.id)}
					<button
						type="button"
						role="tab"
						aria-selected={activeTab === tab.id}
						class="relative isolate flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 {activeTab ===
						tab.id
							? 'text-bg'
							: 'text-muted hover:text-fg'}"
						onclick={() => (activeTab = tab.id)}
					>
						{#if activeTab === tab.id}
							<span
								class="absolute inset-0 -z-10 rounded-full bg-fg"
								in:receive={{ key: 'tab' }}
								out:send={{ key: 'tab' }}
							></span>
						{/if}
						<Icon name={tab.icon} class="size-4" />
						{tab.id}
					</button>
				{/each}
			</div>
		</div>

		<div class="mt-12 min-h-96" role="tabpanel" aria-label={activeTab}>
			{#key activeTab}
				{@const items = timelines[activeTab]}
				{#if items}
					<ol
						class="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-linear-to-b before:from-accent/70 before:via-line-strong before:to-transparent"
					>
						{#each items as item, i (item.title)}
							<li class="relative pl-10 md:pl-14" data-reveal style="--d: {i * 120}ms">
								<span
									class="absolute top-7 left-0 grid size-6 place-items-center rounded-full border border-line-strong bg-bg"
									aria-hidden="true"
								>
									{#if item.current}
										<span class="absolute size-6 animate-ping rounded-full bg-accent/30"></span>
										<span class="size-2 rounded-full bg-accent"></span>
									{:else}
										<span class="size-2 rounded-full bg-subtle"></span>
									{/if}
								</span>

								<article class="card spotlight p-6 md:p-8" data-spotlight>
									<div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
										<div>
											<h3 class="text-xl font-semibold tracking-tight">{item.title}</h3>
											<p class="mt-1 text-muted">{item.org}</p>
										</div>
										<span
											class="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line bg-elevated/60 px-3 py-1 font-mono text-xs text-muted"
										>
											{#if item.current}<span class="size-1.5 rounded-full bg-emerald-400"
												></span>{/if}
											{item.period}
										</span>
									</div>

									<p class="mt-5 leading-relaxed text-muted">{item.description}</p>

									{#if item.bullets}
										<p class="mt-6 text-sm font-medium">{item.bulletsTitle}</p>
										<ul class="mt-3 grid gap-2.5 text-sm text-muted sm:grid-cols-2">
											{#each item.bullets as bullet (bullet)}
												<li class="flex gap-2.5">
													<Icon
														name="check"
														class="mt-0.5 size-4 shrink-0 text-accent"
														strokeWidth={2.25}
													/>
													{bullet}
												</li>
											{/each}
										</ul>
									{/if}

									<div class="mt-6 flex flex-wrap gap-2">
										{#each item.tags as tag (tag)}
											<span class="chip">{tag}</span>
										{/each}
									</div>
								</article>
							</li>
						{/each}
					</ol>

					{#if activeTab === 'Achievement'}
						<div class="mt-10 grid gap-4 md:grid-cols-3">
							{#each achievementHighlights as h, i (h.title)}
								<div data-reveal style="--d: {200 + i * 100}ms">
									<div class="card spotlight h-full p-6" data-spotlight>
										<div
											class="grid size-10 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent"
										>
											<Icon name={h.icon} class="size-[18px]" />
										</div>
										<h4 class="mt-5 font-semibold">{h.title}</h4>
										<p class="mt-1.5 text-sm text-muted">{h.text}</p>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				{:else}
					<div class="grid gap-4 md:grid-cols-2">
						{#each certificates as cert, i (cert.title)}
							<div data-reveal style="--d: {i * 120}ms">
								<a
									href={cert.href}
									target="_blank"
									rel="noopener noreferrer"
									class="card spotlight group flex h-full flex-col p-7"
									data-spotlight
								>
									<div class="flex items-start justify-between">
										<div
											class="grid size-12 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent"
										>
											<Icon name="award" />
										</div>
										<Icon
											name="arrow-up-right"
											class="size-5 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
										/>
									</div>
									<h3 class="mt-6 text-lg font-semibold tracking-tight">{cert.title}</h3>
									<p class="mt-2 grow text-muted">{cert.text}</p>
									<span class="mt-6 text-sm font-medium text-accent">View certificate</span>
								</a>
							</div>
						{/each}
					</div>
				{/if}
			{/key}
		</div>
	</div>
</section>
