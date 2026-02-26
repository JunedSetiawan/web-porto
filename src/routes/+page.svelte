<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Education from "$lib/components/Education.svelte";
  import Skill from "$lib/components/Skill.svelte";
  import Portfolio from "$lib/components/Portfolio.svelte";
  import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
  <title>Juned Setiawan Suyadi - Web Developer</title>
  <meta name="description" content="Juned Setiawan Suyadi - Web Development Enthusiast" />
  <meta name="title" content="Juned Setiawan Suyadi" />
  <meta name="keywords" content="Juned Setiawan, Juned Setiawan Suyadi, Web Development, Web developer, Backend Developer, Laravel Developer, Web App Developer." />
  <meta name="author" content="Juned Setiawan Suyadi" />
</svelte:head>

<div class="overflow-x-hidden">
  <Hero />
  <About />
  <Education />
  <Skill />
  <Portfolio />
  <Contact />
</div>
