<script lang="ts">
	import { onMount } from 'svelte';
	import init, * as lib from 'invaderz';
	let canvas: HTMLCanvasElement;
	onMount(async () => {
		init().then(() => {
			// lib.greet();
			lib.start();
		});
	});
</script>

<div class="bevy-instance">
	<canvas
		bind:this={canvas}
		class="rounded-lg bevy-instance__canvas"
		id="bevy"
		width="598"
		height="676"
	/>
</div>

<style>
	.rounded-lg {
		border-radius: 0.5rem;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}
</style>
