<script lang="ts">
	import Game from '../components/Game.svelte';
</script>

<div class="m-auto w-96">
	<header class="py-5">
		<h1 class="text-center font-bold">SpaceBud #1885</h1>
		<div class="mx-auto flex justify-center">
			<img width="130" class="mask mask-hexagon-2" alt="SpaceBud #1885" src="SpaceBud1885.png" />
		</div>
	</header>
	<div class="flex flex-col justify-center items-center">
		<div class="bg-base-100 shadow-xl">
			<div class="w-full">
				<Game />
			</div>
		</div>
	</div>
</div>
