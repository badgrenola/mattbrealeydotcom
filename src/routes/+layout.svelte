<script>
  import Header from "#lib/Header.svelte"
  import Footer from "#lib/Footer.svelte"
  import SideBar from "#lib/SideBar.svelte"
  import "../app.postcss"

  export let data
</script>


<div class="container mx-auto flex flex-col min-h-full max-w-5xl">
	<main class="relative flex-1 p-6 sm:p-8 grid grid-cols-[1fr_auto] sm:grid-cols-[20%_minmax(0,1fr)] sm:gap-x-6 content-start items-start font-normal text-ink text-lg">
		<Header />
		<SideBar articles={data.articles} projects={data.projects} />
		<div class="col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 mt-10 sm:mt-0 min-w-0 text-pretty">
			<slot></slot>
		</div>
	</main>

	<Footer />
</div>