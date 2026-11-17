<script lang="ts">
	let {
		eyebrow,
		title,
		highlight,
		description
	}: {
		eyebrow: string;
		title: string;
		highlight?: string;
		description?: string;
	} = $props();
</script>

<div class="mb-14 max-w-3xl md:mb-20">
	<p class="eyebrow" data-reveal>{eyebrow}</p>
	<h2
		class="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-6xl md:leading-[1.05]"
		data-reveal
		style="--d: 80ms"
	>
		{title}
		{#if highlight}<span class="text-accent-gradient">{highlight}</span>{/if}
	</h2>
	{#if description}
		<p class="mt-5 max-w-2xl text-lg text-pretty text-muted" data-reveal style="--d: 160ms">
			{description}
		</p>
	{/if}
</div>
