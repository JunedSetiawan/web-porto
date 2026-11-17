<script lang="ts">
	import { icons, type IconName } from '#lib/icons.ts';

	let {
		name,
		class: className = 'size-5',
		strokeWidth = 1.75
	}: { name: IconName; class?: string; strokeWidth?: number } = $props();

	const icon = $derived(icons[name] as { d: string; fill?: boolean });
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill={icon.fill ? 'currentColor' : 'none'}
	stroke={icon.fill ? 'none' : 'currentColor'}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<path d={icon.d} />
</svg>
