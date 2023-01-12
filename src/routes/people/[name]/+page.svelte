<script>
	// @ts-nocheck
	import { addComment } from '$lib/actions';
	import { enhance } from '$app/forms';
	import Comment from '$lib/components/Comment.svelte';

	export let data;

	$: ({ name, age, comments } = data);

	const handleAddComment = ({ data }) => {
		const name = data.get('name');
		addComment(name);
	};
</script>

<h1>{name}</h1>
<h2>{age}</h2>
{#each comments as comment (comment.id)}
	<Comment {comment} {name} />
{/each}
<form use:enhance={handleAddComment} action="?/addComment" method="post">
	<input type="hidden" name="name" value={name} />
	<button type="submit">Add Comment</button>
</form>
