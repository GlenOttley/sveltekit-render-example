<script>
	// @ts-nocheck
	export let comment;
	export let name;

	$: ({ content } = comment);
	$: name;
</script>

<p>{content}</p>
