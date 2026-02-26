<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let visible = $state(false);
  
  // Typewriter effect
  const titles = [
    "Laravel Web Developer",
    "Full-Stack Developer",
    "Web Development Enthusiast"
  ];
  let currentTitleIndex = $state(0);
  let currentText = $state("");
  let isDeleting = $state(false);
  let typingSpeed = $state(100);

  onMount(() => {
    visible = true;
    
    // Typewriter loop
    const type = () => {
      const fullText = titles[currentTitleIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typingSpeed = 50;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typingSpeed = 100;
      }

      if (!isDeleting && currentText === fullText) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        typingSpeed = 500; // Pause before next word
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000); // Start delay
  });
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden pt-16">
  <!-- Background decorations -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
  </div>

  <div class="section-padding w-full">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8 text-center lg:text-left order-2 lg:order-1">
          {#if visible}
            <div class="space-y-4" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
              <div class=" text-primary text-sm font-bold">
                <!-- <span class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span> -->
                Available for work
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello, I'm <span class="gradient-text block mt-2">Juned Setiawan</span>
              </h1>

              <div class="space-y-2 h-[80px]"> <!-- Fixed height to prevent layout shift with typewriter -->
                <p class="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary h-[40px]">
                  {currentText}<span class="animate-pulse text-base-content">|</span>
                </p>
                <p class="text-lg text-base-content/60">
                  Passionate about creating efficient and innovative web solutions with expertise in Laravel, modern web technologies, and user-centered design principles.
                </p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-14 md:pt-9" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
              <a href="#contact" class="px-8 py-4 bg-primary text-primary-content font-semibold rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <span class="relative z-10 text-primary-content">Get In Touch</span>
                <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a href="#portfolio" class="px-8 py-4 bg-base-100 text-base-content border border-base-content/20 font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md">
                View My Work
              </a>

           
            </div>

            <!-- Social Links -->
            <div class="flex items-center justify-center lg:justify-start space-x-6 pt-6" in:fade={{ duration: 1000, delay: 600 }}>
              <a href="https://github.com/JunedSetiawan" target="_blank" aria-label="Github Profile" class="text-base-content/70 hover:text-primary transition-all duration-300 p-2.5 bg-base-content/5 hover:bg-primary/10 rounded-full shadow-sm hover:shadow-md border border-base-content/10">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/juned-setiawan" target="_blank" aria-label="LinkedIn Profile" class="text-base-content/70 hover:text-primary transition-all duration-300 p-2.5 bg-base-content/5 hover:bg-primary/10 rounded-full shadow-sm hover:shadow-md border border-base-content/10">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          {/if}
        </div>

        <!-- Image Section -->
        <div class="relative flex justify-center mr-0 lg:mr-20 lg:justify-end order-1 lg:order-2">
          {#if visible}
            <div class="relative group" in:fly={{ x: 50, duration: 1200, delay: 300 }}>
              <!-- Background decoration -->
              <div class="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div class="absolute inset-0 bg-secondary/20 rounded-3xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>

              <!-- Main image -->
              <div class="relative z-10 overflow-hidden rounded-3xl shadow-2xl glass-card">
                <img
                  src="/profile.png"
                  class="w-56 h-64 sm:w-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Juned Setiawan"
                  fetchpriority="high"
                />
                
                <!-- Overlay hover effect -->
                <div class="absolute inset-0 bg-base-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Floating elements -->
              <div class="absolute -top-6 -right-6 w-12 h-12 bg-primary/30 rounded-full animate-bounce" style="animation-delay: 2s;"></div>
              <div class="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary/30 rounded-full animate-bounce" style="animation-delay: 4s;"></div>
            </div>
          {/if}
        </div>
      </div>

      <!-- Scroll indicator -->
      {#if visible}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" in:fade={{ delay: 1500 }}>
          <div class="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-base-content/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
