<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade, scale } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { expertise, skillCategories, skills } from '#lib/data.ts';

	let selected = $state<(typeof skillCategories)[number]>('All');
	const filtered = $derived(
		selected === 'All' ? skills : skills.filter((s) => s.category === selected)
	);
	const [send, receive] = crossfade({ duration: 500, easing: expoOut });
</script>

<section id="skill" class="section">
	<div class="container-x">
		<SectionHeading
			eyebrow="Skills"
			title="Tools of"
			highlight="the trade."
			description="A comprehensive overview of the technologies and tools I use to build modern, scalable web applications and deliver exceptional user experiences."
		/>

		<div class="mb-10 flex flex-wrap gap-2" data-reveal>
			{#each skillCategories as category (category)}
				<button
					type="button"
					class="relative isolate rounded-full border px-4 py-2 text-sm transition-colors duration-300 {selected ===
					category
						? 'border-transparent text-bg'
						: 'border-line text-muted hover:border-line-strong hover:text-fg'}"
					aria-pressed={selected === category}
					onclick={() => (selected = category)}
				>
					{#if selected === category}
						<span
							class="absolute inset-0 -z-10 rounded-full bg-fg"
							in:receive={{ key: 'skill-filter' }}
							out:send={{ key: 'skill-filter' }}
						></span>
					{/if}
					{category}
				</button>
			{/each}
		</div>

		<div data-reveal style="--d: 100ms">
			<ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				{#each filtered as skill, i (skill.name)}
					<li
						animate:flip={{ duration: 600, easing: expoOut }}
						in:scale={{ start: 0.85, duration: 500, delay: i * 25, easing: expoOut }}
					>
						<div
							class="card spotlight group flex h-full flex-col items-center p-5 text-center"
							data-spotlight
						>
							<div
								class="grid size-14 place-items-center rounded-2xl border border-line bg-elevated transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110"
							>
								<img
									src={skill.icon}
									alt=""
									class="size-8 object-contain {skill.invertDark ? 'dark:invert' : ''}"
									loading="lazy"
								/>
							</div>
							<p class="mt-4 text-sm font-medium">{skill.name}</p>
							<p class="text-xs text-subtle">{skill.category}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="mt-20">
			<p class="mb-6 font-mono text-xs tracking-[0.2em] text-subtle uppercase" data-reveal>
				Additional expertise
			</p>
			<div class="grid gap-4 md:grid-cols-3">
				{#each expertise as group, i (group.title)}
					<div data-reveal style="--d: {i * 120}ms">
						<article class="card spotlight h-full p-7" data-spotlight>
							<div class="flex items-center gap-3">
								<div
									class="grid size-10 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent"
								>
									<Icon name={group.icon} class="size-[18px]" />
								</div>
								<h3 class="font-semibold">{group.title}</h3>
							</div>
							<ul class="mt-6 space-y-3 text-muted">
								{#each group.items as item (item)}
									<li class="flex items-center gap-3">
										<span class="size-1 rounded-full bg-accent"></span>
										{item}
									</li>
								{/each}
							</ul>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
