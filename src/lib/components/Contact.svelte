<script lang="ts">
	import Icon from './Icon.svelte';
	import { profile } from '#lib/data.ts';

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(profile.email);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => (copied = false), 2000);
		} catch {
			location.href = `mailto:${profile.email}`;
		}
	}

	const channels = [
		{ label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
		{
			label: 'WhatsApp',
			value: profile.whatsapp.display,
			href: profile.whatsapp.url,
			icon: 'whatsapp'
		},
		{ label: 'Location', value: profile.location, href: undefined, icon: 'map-pin' }
	] as const;
</script>

<section id="contact" class="section isolate overflow-hidden">
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div
			class="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black_10%,transparent_70%)]"
		></div>
		<div
			class="absolute top-1/4 left-1/2 h-96 w-4xl -translate-x-1/2 animate-aurora rounded-full bg-accent/15 blur-[140px]"
		></div>
	</div>

	<div class="container-wide">
		<div class="mx-auto max-w-4xl text-center">
			<p class="eyebrow justify-center" data-reveal>Contact</p>
			<h2
				class="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl md:leading-[1.02]"
				data-reveal
				style="--d: 100ms"
			>
				Let's build something <span class="text-accent-gradient">great together.</span>
			</h2>
			<p
				class="mx-auto mt-6 max-w-xl text-lg text-pretty text-muted"
				data-reveal
				style="--d: 200ms"
			>
				Ready to bring your ideas to life? I'm always excited to discuss new projects and
				opportunities.
			</p>

			<div class="mt-10 flex flex-wrap justify-center gap-3" data-reveal style="--d: 300ms">
				<a href="mailto:{profile.email}" class="btn btn-primary group">
					<Icon name="mail" class="size-4" />
					Send an email
					<Icon name="arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
				</a>
				<button type="button" class="btn btn-ghost" onclick={copyEmail}>
					<Icon
						name={copied ? 'check' : 'copy'}
						class="size-4 {copied ? 'text-emerald-400' : ''}"
					/>
					{copied ? 'Copied!' : 'Copy email'}
				</button>
			</div>
		</div>

		<div class="mt-20 grid gap-4 md:grid-cols-3">
			{#each channels as channel, i (channel.label)}
				<div data-reveal style="--d: {400 + i * 100}ms">
					<svelte:element
						this={channel.href ? 'a' : 'div'}
						href={channel.href}
						target={channel.href?.startsWith('http') ? '_blank' : undefined}
						rel={channel.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="card spotlight group flex h-full items-center gap-4 p-6 backdrop-blur"
						data-spotlight
					>
						<span
							class="grid size-12 shrink-0 place-items-center rounded-xl border border-line bg-elevated text-muted transition-colors duration-300 group-hover:text-accent"
						>
							<Icon name={channel.icon} class="size-5" />
						</span>
						<span class="min-w-0 grow text-left">
							<span class="block text-xs text-subtle">{channel.label}</span>
							<span class="block truncate font-medium">{channel.value}</span>
						</span>
						{#if channel.href}
							<Icon
								name="arrow-up-right"
								class="size-5 shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
							/>
						{/if}
					</svelte:element>
				</div>
			{/each}
		</div>
	</div>
</section>
