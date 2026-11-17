<script lang="ts">
	import Icon from './Icon.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { countUp } from '#lib/actions.ts';
	import { profile, stats, values } from '#lib/data.ts';
</script>

<section id="about" class="section">
	<div class="container-x">
		<SectionHeading eyebrow="About" title="Turning ideas into" highlight="reliable web products." />

		<div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
			<div class="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
				<p class="text-xl text-pretty text-fg md:text-2xl md:leading-snug" data-reveal>
					Hi, I'm {profile.name} — a Full-Stack Developer at Iconix Software and a graduate of Politeknik
					Elektronika Negeri Surabaya in Informatics Engineering, with a GPA of 3.65.
				</p>
				<p data-reveal style="--d: 100ms">
					I build web applications end-to-end with Laravel — from database design and back-end logic
					to clean, responsive interfaces. Beyond the code, I also take care of what runs it:
					setting up and maintaining servers, managing databases, and keeping deployments running
					smoothly.
				</p>
				<p data-reveal style="--d: 200ms">
					My journey began with a fascination for computers, which grew into a passion for building
					reliable, efficient digital products. With over two years of professional and freelance
					experience, I enjoy collaborating with teams, picking up new technologies, and turning
					ideas into software people actually use.
				</p>
			</div>

			<dl class="grid grid-cols-2 gap-3 self-start lg:col-span-5">
				{#each stats as stat, i (stat.label)}
					<div data-reveal="scale" style="--d: {i * 90}ms">
						<div class="card spotlight h-full p-6" data-spotlight>
							<dt class="sr-only">{stat.label}</dt>
							<dd>
								<span class="text-4xl font-semibold tracking-tight md:text-5xl">
									<span use:countUp={stat.value}>{stat.value}</span><span class="text-accent"
										>{stat.suffix}</span
									>
								</span>
								<span class="mt-2 block text-sm text-muted">{stat.label}</span>
							</dd>
						</div>
					</div>
				{/each}
			</dl>
		</div>

		<div class="mt-20">
			<p class="mb-6 font-mono text-xs tracking-[0.2em] text-subtle uppercase" data-reveal>
				Core values
			</p>
			<div class="grid gap-4 md:grid-cols-3">
				{#each values as value, i (value.title)}
					<div data-reveal style="--d: {i * 120}ms">
						<article class="card spotlight group h-full p-7" data-spotlight>
							<div
								class="grid size-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
							>
								<Icon name={value.icon} />
							</div>
							<h3 class="mt-6 text-lg font-semibold">{value.title}</h3>
							<p class="mt-2 text-muted">{value.text}</p>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
