<script>
  import { site } from "./site.js"

  let {
    title = site.name,
    description = site.description,
    image = site.image.path,
    imageAlt = site.image.alt,
    type = "website", // "website" | "article"
    path = "",
    publishedTime,
  } = $props()

  const absolute = (p) => (p.startsWith("http") ? p : `${site.origin}${p}`)

  let url = $derived(`${site.origin}${path || "/"}`)
  let fullTitle = $derived(title === site.name ? title : `${title} // ${site.name}`)
  let imageUrl = $derived(absolute(image))
  let isDefaultImage = $derived(image === site.image.path)

  // JSON-LD: Person on the front page, BlogPosting on articles
  let jsonLd = $derived.by(() => {
    if (type === "article") {
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        datePublished: publishedTime,
        image: imageUrl,
        url,
        author: { "@type": "Person", name: site.name, url: site.origin },
      }
    }
    if (path === "") {
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        jobTitle: "Software developer",
        url: site.origin,
        sameAs: [site.github, site.linkedin],
      }
    }
    return null
  })

  // Escape "<" so the JSON can't close the script tag early
  let jsonLdScript = $derived(
    jsonLd
      ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</` + "script>"
      : ""
  )
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />
  <meta name="theme-color" content={site.themeColor} />

  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:alt" content={imageAlt} />
  {#if isDefaultImage}
    <meta property="og:image:width" content={site.image.width} />
    <meta property="og:image:height" content={site.image.height} />
  {/if}
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content={site.locale} />
  {#if type === "article"}
    {#if publishedTime}
      <meta property="article:published_time" content={publishedTime} />
    {/if}
    <meta property="article:author" content={site.origin} />
  {/if}

  <!-- Twitter/X falls back to the Open Graph tags for everything else -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:alt" content={imageAlt} />

  <link rel="alternate" type="application/rss+xml" title="Matt Brealey: Articles" href="/rss.xml" />

  <link rel="me" href={site.github} />
  <link rel="me" href={site.linkedin} />

  {@html jsonLdScript}
</svelte:head>
