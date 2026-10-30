<script>
	import PageLayout from '#lib/PageLayout.svelte'
	import Card from '#lib/Card.svelte'
	import SEO from '#lib/SEO.svelte'
	export let data
</script>

<SEO title="Articles" path="/articles" />

<PageLayout>
	<h1 slot="title">Articles</h1>
	<div slot="content" class="">
		{#if data.articles}
			<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
				{#each data.articles as article, articleIndex}
					<Card
						date={article.metadata.date}
						desc={article.metadata.desc}
						link={`/articles/${article.metadata.slug}`}
						smallImage={article.metadata.smallImage}
						title={article.metadata.title}
						timeToRead={article.metadata.timeToRead}
					/>

          {#if articleIndex !== data.articles.length - 1}
            <hr class="w-full mt-6 mb-9 mx-4 md:hidden" />
          {/if}
				{/each}
			</div>
		{/if}
	</div>
</PageLayout>
