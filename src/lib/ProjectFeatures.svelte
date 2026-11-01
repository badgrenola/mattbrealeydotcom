<script>
  export let features = []
</script>

{#if features.length}
    <h2 id="features" class="mt-6 text-xl text-brand font-light">Features</h2>
    <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
        {#each features as feature}
            <div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
                <div class="flex flex-col relative h-full">
                    <div class="relative pb-[66.66%] rounded-md overflow-hidden">
                        {#if feature.image}
                            <img class="absolute h-full w-full object-cover" src={feature.image} alt={feature.desc} />
                        {:else if feature.video}
                            <video autoplay loop muted playsinline preload="metadata" aria-label={feature.desc} class="absolute h-full w-full">
                                <source src={feature.video} type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        {/if}
                    </div>
                    <div class="font-semibold mt-1 text-ink group-hover:text-accent">{feature.title}</div>
                    <span class="text-sm text-ink-soft">{@html feature.desc}</span>
                </div>
            </div>
        {/each}
    </div>
{/if}