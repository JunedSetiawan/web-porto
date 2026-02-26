<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Education from "$lib/components/Education.svelte";
  import Skill from "$lib/components/Skill.svelte";
  import Portfolio from "$lib/components/Portfolio.svelte";
  import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
  <title>Juned Setiawan - Full Stack Web Developer</title>
  <meta name="description" content="Personal portfolio of Juned Setiawan, a Full Stack Laravel Developer. Discover my journey, skills, and featured projects." />
</svelte:head>

<div class="overflow-x-hidden">
  <Hero />
  <About />
  <Education />
  <Skill />
  <Portfolio />
  <Contact />
</div>
