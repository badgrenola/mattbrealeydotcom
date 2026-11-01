
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

<header class="sm:flex sm:justify-between sm:items-center sm:p-4 lg:p-8">
  <div class="flex items-center justify-between px-4 py-4 sm:p-0">
      <div class="">
          <a href="/" alt="Home">
              <img class="h-12 sm:h-16 lg:h-24 rounded-full avatar" src="/profile.jpg" alt="Matt Brealey's head" />
          </a>
      </div>
      <div class="sm:hidden">
          <button type="button" id="menuButton" aria-label="Menu" aria-expanded={isOpen} class="block text-icon hover:text-ink-soft focus:text-ink-soft focus:outline-none pr-2" onclick={() => {isOpen = !isOpen}}>
              <svg class="h-8 w-8 fill-current {isOpen ? 'text-brand' : 'text-icon'}" viewBox="0 0 100 70">
                  <rect width="100" height="10"></rect>
                  <rect y="30" width="100" height="10"></rect>
                  <rect y="60" width="100" height="10"></rect>
              </svg>
          </button>
      </div>
  </div>
  <div class="px-2 pt-2 {isOpen ? 'block' : 'hidden'} sm:flex sm:p-0">
      <a href="/" class="headerLink colorLink {isIndex && "headerLinkActive"}">Hello</a>
      <a href="/projects" id="projectsMenuItem" class="headerLink colorLink {isProjects && "headerLinkActive"}">Projects</a>
      <a href="/articles" class="headerLink colorLink {isArticles && "headerLinkActive"}">Articles</a>
      <div class="headerLink h-16 sm:hidden">
          <Social />
      </div>
  </div>
</header>