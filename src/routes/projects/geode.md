---
id: 3
slug: geode
title: Geode (prototype)
smallImage: /images/geode/splash_small.jpg
largeImage: /images/geode/splash_half.jpg
desc: A WIP web-app that allows you to preview GeoTiff metadata extremely quickly, directly in your browser.
keywords: tiff, geotiff, dtm, gis, mapping, terrain, digital terrain model, planetary data, data
tagName: geode
---

<script>
    import ProjectImage from '$lib/ProjectImage.svelte'
    import ProjectLinks from '$lib/ProjectLinks.svelte'
    import ProjectFeatures from '$lib/ProjectFeatures.svelte'
    import ProjectTodos from '$lib/ProjectTodos.svelte'

    const links = [
        {
            title:"Website",
            url:"https://mattbrealey.com/geode"
        }
    ]

    const features = []
    const todos = [
        "Finalise a UI design",
        "Implement the UI",
        "Experiment with image previews at different resolutions",
        "Experiment with a 3D preview"
    ]
</script>

<ProjectImage {largeImage} {title} {links} />
<ProjectLinks {links} />
<h2 id="what-is-it" class="mt-6 text-xl text-pink-600 font-light">What is it?</h2>

Geode is a web-app prototype that allows you to quickly and easily query the metadata stored inside any GeoTiff file simply by dragging the file into your browser.

As part of my [AreoBrowser](./areo-browser) pipeline work, I needed to figure out the structure of the GeoTiff format. In the spirit of trying to create smaller projects,
share more code, and write a few _hopefully_ useful but no-doubt incredibly niche tools, I decided to spend a few hours over a few days to see if I could get
Tiff header reading working in-browser, using [Svelte](https://svelte.dev/) and [Web Workers](https://medium.com/samsung-internet-dev/web-workers-in-the-real-world-d61387958a40).
Geode is the result. 

Right now this prototype just gathers all of the included metadata info behind the scenes, and displays some (somewhat arbitrary) image information on completion. 
The next step is to display that information in a useful way, with an image preview _and potentially_ a 3D preview as well!

If you have any feature requests, just let me know [over on Twitter](https://twitter.com/badgrenola).

<ProjectFeatures {features} />
<ProjectTodos {todos} />