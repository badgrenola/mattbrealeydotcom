---
id: 2
slug: areo-browser
title: "Areo Browser"
smallImage: /images/areo-browser/splash_small.jpeg
largeImage : /images/areo-browser/splash_small.jpeg
desc: A web-app allowing you to explore nearly 2000 3D models of Mars, using data from HiRISE & HRSC.
keywords: areo, areo-browser, areo browser, areobrowser, space, hirise, hrsc, browser, svelte, mobile, desktop, dtm, gis, terrain, digital terrain model, mars, planet, planetary data, data
tagName: areobrowser
---


<script>
    import ProjectImage from '$lib/ProjectImage.svelte'
    import ProjectLinks from '$lib/ProjectLinks.svelte'
    import ProjectFeatures from '$lib/ProjectFeatures.svelte'
    import ProjectTodos from '$lib/ProjectTodos.svelte'

  const links = [
      {
          title:"Website",
          url:"https://areobrowser.com"
      }
  ]

  const features = [
      {
          title:"Browse & Search Nearly 2000 Models", 
          desc:"Filtering and sorting options make it SUPER easy to find the DTM you're looking for.", 
          image:"/images/areo-browser/fileCount.jpg"
      },
      {
          title:"Multi-resolution Meshes & Imagery", 
          desc:"Easily switch between 4 quality levels for meshes & their associated images, only downloading data when needed.", 
          image:"/images/areo-browser/resolution.jpg"
      },
      {
          title:"Works on both Desktop & Mobile", 
          desc:"With a UI designed for phones, tablets and desktops, you can view slices of Mars on any of your devices.", 
          image:"/images/areo-browser/mobile.jpg"
      },
      {
          title:"Normal Maps to Provide Extra Detail", 
          desc:"These generated images massively increase the perceived details on the loaded mesh, without requiring a more powerful machine.", 
          image:"/images/areo-browser/normal.jpg"
      },
      {
          title:"Vertical Exaggeration Options", 
          desc:"Increase the vertical scale of the loaded mesh up to 5x, to make even the flattest terrain easier to understand.", 
          image:"/images/areo-browser/ve.gif"
      },
      {
          title:"Altimetry Mode", 
          desc:"Apply an easy-to-read elevation gradiant to the model, with overlaid contour lines at custom intervals ranging from 5m to 5km.", 
          image:"/images/areo-browser/alt.gif" //https://gifmaker.me/
      },
  ]
  
  const todos = [
      "Model downloads",
      "3D-printable model generation and downloads",
      "Ability to save an image of the current view, with a transparent background",
      "Ability to share a link to the current model with the current camera angle",
      "Realistic lighting based upon location and a given time, using a full sun/sky model",
      "WASD navigation",
      "Basic fly-over/animation support",
      "Ability to search by a range of values (e.g. elevation in the range 100-200m)",
      "Apply for a DOI so the site can be easily referenced"
  ]

</script>

<ProjectImage {largeImage} {title} {links} />
<ProjectLinks {links} />
<h2 id="what-is-it" class="mt-6 text-xl text-pink-600 font-light">What is it?</h2>

Areo Browser is a [Svelte](https://svelte.dev/)/[ThreeJS](https://threejs.org/) web-app that allows you to explore over 2000 Martian terrain models, in full 3D, directly in your browser and on mobile. 
It currently uses data from both the [HiRISE](https://www.uahirise.org/) camera (on-board NASA's [Mars Reconnaissance Orbiter](https://mars.nasa.gov/mro/)), and the [HRSC](https://www.esa.int/ESA_Multimedia//Images/2004/01/The_High_Resolution_Stereo_Camera_HRSC) (on-board ESA's [Mars Express](http://www.esa.int/Science_Exploration/Space_Science/Mars_Express)).

With options for mesh and image resolution, vertical exaggeration, and displaying a custom [Cividis](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0199239) gradient with contour mapping on the model,
Areo Browser vastly increases the accessibility of the included data.

This new version of Areo Browser is able to process and view all types of Martian 3D data, so if you'd like to talk about having your data included, [please just get in touch!](mailto:hello@mattbrealey.com)

Each available model consists of two parts - the mesh, and the associated image data.

The mesh is generated on-the-fly in the browser, using [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to convert a custom-encoded RGB image into the required height data.
This custom image format is an order-of-magnitude smaller than the original source file, but maintains a high-level of accuracy, and allows different resolutions to be quickly generated as needed.
It is created using an upcoming new version of my Mac-based conversion tool, [Areo](./areo).

Two images are then applied to the model. The first is a colour image, created by combining all available RGB image data from the source files, and displayed at the desired resolution.
The second is a _normal_ map, which is a way of adding extra perceived detail to the model, without needing to increase the poly-count, again helping to ensure that the files can be viewed on older devices.

<ProjectFeatures {features} />
<ProjectTodos {todos} />