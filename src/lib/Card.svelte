<script>
  export let date
  export let desc
  export let link
  export let smallImage
  export let title
  export let timeToRead
</script>

<div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
  <div class="group flex flex-col relative h-full cursor-pointer">
      <a data-sveltekit-preload-data="hover" href={link} aria-label={title} class="absolute w-full h-full z-10"> </a>
      <div class="relative pb-[66.66%] rounded-md overflow-hidden group-hover:opacity-90 transition-opacity duration-100 ease-in-out mb-2">
          <img class="absolute h-full w-full object-cover bg-line" src={smallImage} alt={title} />
      </div>
      {#if date || timeToRead}
          <div class="mt-2 font-light text-xs text-muted flex justify-between">
              {#if date}
                  <span>{date}</span>
              {/if}
              {#if timeToRead}
                  <span class="text-right">{timeToRead} mins to read</span>
              {/if}
          </div>
      {/if}
      <div class="font-semibold text-ink group-hover:text-accent">{title}</div>
      <span class="text-sm text-ink-soft">{desc}</span>
  </div>
</div>