<script>
  export let articles = []
  export let projects = []

  let latestArticles = articles.sort((a, b) => a.metadata.id - b.metadata.id).slice(0, 5).reverse()
  let latestProjects = projects.sort((a, b) => a.metadata.id - b.metadata.id).slice(0, 5).reverse()
</script>

<aside class="hidden sm:block sm:col-start-1 sm:row-start-2 text-sm">
  <div class="flex flex-col">
    <h2 class="text-xs font-medium uppercase tracking-wider text-muted leading-none trim-cap">Latest Projects</h2>
    <ul class="mt-2">
      {#each latestProjects as project}
        <li class="mb-1">
          <a class="text-ink-soft" href="/projects/{project.metadata.slug}">{project.metadata.title}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex flex-col mt-10">
    <h2 class="text-xs font-medium uppercase tracking-wider text-muted leading-none trim-cap">Latest Articles</h2>
    <ul class="mt-2">
      {#each latestArticles as article}
        <li class="mb-1">
          <a class="text-ink-soft" href="/articles/{article.metadata.slug}">{article.metadata.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</aside>