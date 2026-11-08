<script>
    export let date
    export let timeToRead
    export let desc
    export let largeImage
    export let largeImageWidth = undefined
    export let largeImageHeight = undefined
    export let slug
    export let smallImage
    export let title
    import SEO from './SEO.svelte'
    import { toISODate } from './site.js'
</script>

<SEO {title} description={desc} image={smallImage} imageAlt={title} type="article" path={`/articles/${slug}`} publishedTime={toISODate(date)} />

<div class="w-full">
    <div class="mb-5 sm:mb-8 flex w-full flex-col">
        <h1 class="text-3xl sm:text-4xl text-brand font-semibold leading-[1.15] tracking-[-0.02em] trim-cap mb-3 flex-1">
            {title}
        </h1>
        <div class="text-sm text-muted mt-2">{date} · {timeToRead} min read</div>
    </div>
    <img class="rounded-md object-cover" src={largeImage} width={largeImageWidth} height={largeImageHeight} alt={title} />
    <div class="markdown w-full mt-4">
        <slot>No Content Found</slot>
    </div>
</div>