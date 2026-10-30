<script>
	import PageLayout from '#lib/PageLayout.svelte'
	import Card from '#lib/Card.svelte'
	export let data
</script>

<svelte:head>
  <title>Matt Brealey</title>
  <meta name="description" content="The portfolio site of a freelance creative problem solver." />
  <meta name="keywords" content="space, react, reactjs, threejs, sapper, svelte, sveltejs, ios, swift, 3d, ar, vfx, design"/>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://mattbrealey.com">
  <meta property="og:title" content="Matt Brealey">
  <meta property="og:description" content="The portfolio site of a freelance creative problem solver.">
  <meta property="og:image" content="https://mattbrealey.com/profile.jpg">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://mattbrealey.com">
  <meta name="twitter:title" content="Matt Brealey">
  <meta name="twitter:description" content="The portfolio site of a freelance creative problem solver.">
  <meta name="twitter:image" content="https://mattbrealey.com/profile.jpg">
</svelte:head>

<PageLayout>
	<h1 slot="title">Projects</h1>
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
