<script>
  export let largeImage
  export let title
  export let links = []
</script>

{#if links.length && links[0].download}
  <img class="rounded-md object-cover" src={largeImage} alt={title} />
{:else}
  <a href="{links.length ? links[0].url : "#"}" target="_blank" rel="noopener noreferrer">
    <img class="rounded-md object-cover" src={largeImage} alt={title} />
  </a>
{/if}