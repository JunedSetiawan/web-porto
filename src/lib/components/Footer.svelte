<script lang="ts">
	import Icon from './Icon.svelte';
	import { navItems, socials } from '#lib/data.ts';

	const year = new Date().getFullYear();
</script>

<footer class="relative isolate overflow-hidden border-t border-line">
	<!-- Animated backdrop: soft drifting glows and a light beam on the top border -->
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div
			class="absolute -bottom-64 -left-20 size-112 animate-aurora rounded-full bg-accent/10 blur-[120px]"
		></div>
		<div
			class="absolute -right-20 -bottom-64 size-112 animate-aurora rounded-full bg-accent-2/10 blur-[120px] [animation-delay:-6s]"
		></div>
		<div class="footer-beam absolute inset-x-0 top-0 h-px"></div>
	</div>

	<div class="container-x pt-16 pb-8">
		<div class="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
			<div class="max-w-sm">
				<img src="/logo.png" alt="Juned Setiawan" class="h-8 w-auto" />
				<p class="mt-5 text-muted">
					Software engineer passionate about creating efficient and innovative web solutions.
				</p>
			</div>

			<nav aria-label="Footer">
				<p class="font-mono text-xs tracking-[0.2em] text-subtle uppercase">Navigate</p>
				<ul class="mt-4 grid grid-cols-2 gap-x-12 gap-y-2.5">
					{#each navItems as item (item.id)}
						<li>
							<a href="#{item.id}" class="text-muted transition-colors hover:text-fg"
								>{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</nav>

			<div>
				<p class="font-mono text-xs tracking-[0.2em] text-subtle uppercase">Connect</p>
				<div class="mt-4 flex gap-2">
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
				</div>
			</div>
		</div>

		<div
			class="mt-16 flex flex-col-reverse gap-4 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} Juned Setiawan S · <span class="text-muted">Lazy Programmer</span></p>
			<a href="#hero" class="group inline-flex items-center gap-2 transition-colors hover:text-fg">
				Back to top
				<Icon name="arrow-up" class="size-4 transition-transform group-hover:-translate-y-0.5" />
			</a>
		</div>
	</div>
</footer>
