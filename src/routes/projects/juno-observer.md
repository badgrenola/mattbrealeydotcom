---
id: 1
slug: juno-observer
title: Juno Observer
smallImage: /images/juno-observer/splash_small.jpeg
largeImage: /images/juno-observer/splash_half.jpeg
desc: A web-app allowing you to explore Junocam imagery from NASA's Juno spacecraft, projected onto a 3D Jupiter.
keywords: juno, space, nasa, jupiter, browser, react, reactjs, mobile, desktop, planet, planetary data, data, spacecraft, orbit, perijove, mission juno
tagName: junoobserver
---

<script>
    import ProjectImage from '$lib/ProjectImage.svelte'
    import ProjectLinks from '$lib/ProjectLinks.svelte'
    import ProjectFeatures from '$lib/ProjectFeatures.svelte'
    import ProjectTodos from '$lib/ProjectTodos.svelte'

    const links = [
        {
            title:"Website",
            url:"https://juno.observer"
        }
    ]

    const features = [
        {
            title:"15 Perijoves of Data", 
            desc:"The live version of Juno Observer allows you to browse all of the images from the first 15 perijoves of Junocam data.", 
            image:"/images/juno-observer/perijoves.jpg"
        },
        {
            title:"Full Resolution", 
            desc:"Images are projected at full resolution, meaning you can zoom ALL the way in to Jupiter's ludicrous storm features.", 
            image:"/images/juno-observer/detail.jpg"
        },
        {
            title:"Fixed Rotation Mode", 
            desc:"Toggle on <i>Fixed Rotation</i> to lock Jupiter's rotation in place, making it easier to view subtle differences between exposures.", 
            image:"/images/juno-observer/fixedRot.jpg"
        }
    ]

    const todos = [
        "Finish the new pipeline",
        "Finish the new version 🙂"
    ]
</script>

<ProjectImage {largeImage} {title} {links} />
<ProjectLinks {links} />
<h2 id="what-is-it" class="mt-6 text-xl text-pink-600 font-light">What is it?</h2>

Junocam is an instrument onboard NASA's [Juno spacecraft](https://www.jpl.nasa.gov/missions/juno/), which is currently orbiting Jupiter and sending back new imagery every month
and a half as it reaches 'perijove' - it's closest point to the planet. I've written my own processing pipeline for this [image data](https://www.missionjuno.swri.edu/junocam/processing)
(which I'll soon be re-writing, open-sourcing, and documenting here), and Juno Observer (a [React](https://reactjs.org/)/[ThreeJS](https://threejs.org/) web-app) is my way of displaying the results.

It allows you to browse all of the available perijove data, projected onto a 3D representation of Jupiter, giving context to the imagery
in a way that wasn't previously possible.

The live version of the app uses imagery from the original version of my processing pipeline, which has since vastly improved. I'm also currently about
75% of the way through a complete re-write of the app, which already contains a lot more features, thanks to the fact that is now uses
the same base structure as [AreoBrowser](./areo-browser).

<ProjectFeatures {features} />
<ProjectTodos {todos} />