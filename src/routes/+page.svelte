<script>
	import { people } from '$lib/stores';
</script>

<h1>Home</h1>
<div>
	{#each $people as person, index (index)}
		<a href="people/{person.name}">{person.name}</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
