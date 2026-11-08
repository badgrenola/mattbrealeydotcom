
<script>
  import Social from './Social.svelte'

  //Grab the active route
  import { page } from '$app/state'

  //Match the current route to the available options
  let isIndex = $derived(page.url.pathname === "/")
  let isProjects = $derived(page.url.pathname === "/projects")
  let isArticles = $derived(page.url.pathname === "/articles")

  //The nav links, shared by the desktop nav and the mobile menu
  let links = $derived([
    { href: "/", label: "Hello", active: isIndex },
    { href: "/projects", label: "Projects", active: isProjects },
    { href: "/articles", label: "Articles", active: isArticles }
  ])

  //Store the mobile menu open state
  let isOpen = $state(false)

  //Close the menu on route change
  let oldRoute = page.url.pathname
  $effect.pre(() => {
      //If the route has changed
      if (oldRoute !== page.url.pathname) {
          //Store the new route, and close the menu
          oldRoute = page.url.pathname
          isOpen = false
      }
  })
</script>

<svelte:window onkeydown={(e) => { if (e.key === "Escape") isOpen = false }} />

<!-- Rendered as grid items by +layout.svelte: brand, mobile menu button, desktop nav. The mobile menu panel is positioned against <main>. -->
<div class="contents sm:block sm:col-start-1 sm:row-start-1 sm:mb-8">
  <a href="/" aria-label="Matt Brealey, home" class="block justify-self-start text-ink hover:text-ink hover:no-underline">
    <img class="avatar size-14 sm:size-16 object-cover" src="/profile.jpg" width="64" height="64" alt="" />
  </a>
</div>

<div class="sm:hidden justify-self-end self-center -mr-2.5">
  <button type="button" id="menuButton" aria-label={isOpen ? "Close menu" : "Menu"} aria-expanded={isOpen} aria-controls="mobile-menu" class="size-11 grid place-items-center text-ink-soft hover:text-accent" onclick={() => {isOpen = !isOpen}}>
    <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
      {#if isOpen}
        <path d="M6 6l12 12M18 6L6 18"></path>
      {:else}
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      {/if}
    </svg>
  </button>
</div>

<!-- Desktop nav, top right, centred on the photo -->
<nav aria-label="Main" class="hidden sm:flex sm:col-start-2 sm:row-start-1 sm:h-16 sm:items-center sm:justify-end">
  {#each links as link}
    <a href={link.href} id={link.href === "/projects" ? "projectsMenuItem" : undefined} aria-current={link.active ? "page" : undefined} class="headerLink text-ink-soft">{link.label}</a>
  {/each}
  <span class="w-px h-3.5 bg-line ml-2.5 mr-3" aria-hidden="true"></span>
  <div class="-mr-1.5">
    <Social variant="nav" />
  </div>
</nav>

<!-- Mobile menu: an overlay panel under the header row, so the page doesn't shift -->
<nav
  id="mobile-menu"
  aria-label="Main"
  class="sm:hidden absolute inset-x-0 top-20 z-20 border-b border-line bg-page px-6 pb-5 pt-7 shadow-sm
         transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none
         {isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'}"
>
  {#each links as link}
    <a
      href={link.href}
      aria-current={link.active ? "page" : undefined}
      class="flex h-12 items-center text-2xl font-semibold tracking-tight text-ink-soft
             aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-brand
             aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
    >{link.label}</a>
  {/each}
  <div class="mt-3">
    <Social />
  </div>
</nav>
