<script lang="ts">
	export let data;

	$: html_code = data.html_code;
	$: title = data.attributes.title;
</script>

<svelte:head>
	<title>Golf Games Docs | {title}</title>
</svelte:head>

<h1>
	{title}
</h1>

<article>
	{@html html_code}
</article>

<style lang="scss">
	article {
		:global(h2) {
			padding-top: 5rem;
			margin-top: -3.5rem;
		}

		:global(blockquote) {
			margin-block: 1rem;
			margin-left: 1rem;
			padding-left: 0.5rem;
			color: var(--secondary-font-color);
			font-size: var(--small-font);
			border-left: 0.2rem solid var(--border-color);
			line-height: 1.6;
		}

		:global(pre) {
			border-radius: 0.4rem;
			font-size: var(--small-font);
			padding: 1rem;
			margin-block: 1rem;
			overflow: auto;
			max-height: 30rem;
			border: 0.15rem solid var(--code-border-color);
			background-color: var(--code-bg-color);
			tab-size: 4;

			scrollbar-width: thin;
			&::-webkit-scrollbar {
				width: 0.4rem;
				height: 0.4rem;
			}
			&::-webkit-scrollbar-thumb {
				background-color: var(--secondary-font-color);
			}
		}

		:global(code:not(pre code)) {
			font-family: monospace;
			background-color: var(--inline-code-bg-color);
			padding-inline: 0.5rem;
			padding-block: 0.05rem;
			border-radius: 0.2rem;
			font-size: var(--small-font);
			white-space: nowrap;
		}
	}
</style>