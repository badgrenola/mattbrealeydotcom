<script> 
  export let links
</script>

<h2 id="links">{links.length > 1 ? "Links" : "Link"}</h2>
<ul>
  {#each links as link}
      <li>
          {#if link.download}
              <a class="colorLink" href={link.url} download>{link.title}</a>
          {:else}
              {link.title} : <a class="pl-2 colorLink" href={link.url} target="_blank" rel="noopener noreferrer">{link.url.split("//")[1]}</a>
          {/if}
      </li>
  {/each}
</ul>