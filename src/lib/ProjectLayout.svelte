<script>
  export let desc
  export let slug
  export let smallImage
  export let title
  import SEO from './SEO.svelte'
</script>

<SEO {title} description={desc} image={smallImage} imageAlt={title} path={`/projects/${slug}`} />

<div class="w-full">
  <div class="mb-5 sm:mb-8 flex w-full flex-col">
      <h1 class="text-3xl sm:text-4xl text-brand font-semibold leading-[1.15] tracking-[-0.02em] trim-cap mb-3 flex-1">
        {title}
      </h1>
  </div>
  <div class="markdown w-full">
      <slot>No Content Found</slot>
  </div>
</div>