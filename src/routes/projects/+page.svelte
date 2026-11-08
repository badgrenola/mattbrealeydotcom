<script>
	import PageLayout from '#lib/PageLayout.svelte'
	import Card from '#lib/Card.svelte'
	import SEO from '#lib/SEO.svelte'
	export let data
</script>

<SEO title="Projects" path="/projects" />

<PageLayout>
	<span slot="title">Projects</span>
	<div slot="content" class="">
		{#if data.projects}
			<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
				{#each data.projects as project}
					<Card
						desc={project.metadata.desc}
						link={`/projects/${project.metadata.slug}`}
						smallImage={project.metadata.smallImage}
						title={project.metadata.title}
					/>
				{/each}
			</div>
		{/if}
	</div>
</PageLayout>
