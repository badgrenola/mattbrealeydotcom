
<script>
  import Social from './Social.svelte'

  //Grab the active route
  import { page } from '$app/state'

  //Match the current route to the available options
  let isIndex = $derived(page.url.pathname === "/")
  let isProjects = $derived(page.url.pathname === "/projects")
  let isArticles = $derived(page.url.pathname === "/articles")

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

<!-- Rendered as grid items by +layout.svelte: brand, mobile menu button, nav links -->
<a href="/" aria-label="Home" class="flex items-center gap-3 sm:block sm:col-start-1 sm:row-start-1 sm:mb-8 text-ink hover:text-ink hover:no-underline">
  <img class="avatar size-14 sm:size-20 object-cover" src="/profile.jpg" width="80" height="80" alt="" />
  <span class="block text-sm sm:text-base sm:mt-3 font-semibold tracking-tight">Matt Brealey</span>
</a>

<div class="sm:hidden justify-self-end self-center -mr-2.5">
  <button type="button" id="menuButton" aria-label="Menu" aria-expanded={isOpen} class="size-11 grid place-items-center text-ink-soft hover:text-accent {isOpen ? 'text-brand' : ''}" onclick={() => {isOpen = !isOpen}}>
    <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
</div>

<nav class="col-span-2 pt-2 {isOpen ? 'block' : 'hidden'} sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex sm:h-20 sm:items-center sm:justify-end sm:p-0">
  <a href="/" class="headerLink text-ink-soft {isIndex && "headerLinkActive"}">Hello</a>
  <a href="/projects" id="projectsMenuItem" class="headerLink text-ink-soft {isProjects && "headerLinkActive"}">Projects</a>
  <a href="/articles" class="headerLink text-ink-soft {isArticles && "headerLinkActive"}">Articles</a>
  <div class="headerLink h-16 sm:hidden">
    <Social />
  </div>
</nav>
