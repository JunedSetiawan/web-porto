<script lang="ts">
  import { onMount } from "svelte";

  let isMenuOpen = $state(false);
  let isScrolled = $state(false);
  let isDarkMode = $state(true);

  // Initialize theme based on document class or default to dark
  onMount(() => {
    isDarkMode = document.documentElement.classList.contains('dark') || 
                 (!document.documentElement.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme();
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
  }

  function applyTheme() {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  // Add scroll listener to make header glassy when scrolled
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled 
    ? 'backdrop-blur-md bg-base-100/80 border-b border-base-content/10 shadow-lg' 
    : 'bg-transparent'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo/Name -->
      <div class="flex items-center">
        <a href="#hero" class="text-xl font-bold gradient-text"> Jun.dev </a>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <a
          href="#about"
          class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
        >
          About
        </a>
        <a
          href="#education"
          class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
        >
          Education & Experience
        </a>
        <a
          href="#skill"
          class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
        >
          Skills
        </a>
        <a
          href="#portfolio"
          class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
        >
          Contact
        </a>
      </nav>

      <!-- Theme Toggle & Mobile Menu -->
      <div class="flex items-center space-x-2 md:space-x-4">
        <!-- Theme Toggle Button -->
        <button
          class="p-2 rounded-lg hover:bg-base-200 text-base-content/80 hover:text-primary transition-colors duration-300"
          onclick={toggleTheme}
          aria-label="Toggle theme"
        >
          {#if isDarkMode}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {/if}
        </button>

        <!-- Mobile Menu Button -->
        <button
          class="p-2 rounded-lg hover:bg-base-200 transition-colors md:hidden"
          onclick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div
    class="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-base-100 border-t border-base-content/10"
    style="max-height: {isMenuOpen ? '300px' : '0'}; opacity: {isMenuOpen ? '1' : '0'};"
  >
    <div class="px-4 py-2 space-y-1">
      <a
        href="#about"
        class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
        onclick={closeMenu}
      >
        About
      </a>
      <a
        href="#education"
        class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
        onclick={closeMenu}
      >
        Education
      </a>
      <a
        href="#skill"
        class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
        onclick={closeMenu}
      >
        Skills
      </a>
      <a
        href="#portfolio"
        class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
        onclick={closeMenu}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
        onclick={closeMenu}
      >
        Contact
      </a>
    </div>
  </div>
</header>
