<script lang="ts">
  import './layout.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Juned Setiawan - Porfolio</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />
  
  <main class="flex-grow">
    {@render children()}
  </main>
  
  <Footer />
</div>
