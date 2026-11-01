<script>
  import Header from "#lib/Header.svelte"
  import Footer from "#lib/Footer.svelte"
  import SideBar from "#lib/SideBar.svelte"
  import "../app.postcss"

  export let data
</script>


<div class="container mx-auto flex flex-col min-h-full max-w-5xl">
	<Header />
	<main class="flex-grow pb-6">
		<div class="font-normal text-ink text-base sm:text-base p-6 flex lg:p-8 w-full">
			<SideBar articles={data.articles} projects={data.projects} />
			<div class="w-full sm:w-4/5 font-light">
				<slot></slot>
			</div>
		</div>
	</main>

	<Footer />
</div>