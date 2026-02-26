<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let visible = $state(false);
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        visible = true;
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (sectionRef) {
      observer.observe(sectionRef);
    }
    return () => observer.disconnect();
  });
</script>

<section id="contact" class="relative py-0 overflow-hidden" bind:this={sectionRef}>
  <!-- Background decoration -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>

  <div class="section-padding">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      {#if visible}
        <div class="text-center mb-16" in:fade={{ duration: 800 }}>
          <div class="inline-block mb-4">
            <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              Get In Touch
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span class="gradient-text">Together</span>
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. Let's create something amazing together.
          </p>
          <div class="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div class="grid lg:grid-cols-1 gap-16 items-start justify-center">
          <!-- Contact Information -->
          <div class="space-y-8 max-w-4xl mx-auto w-full">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold mb-6 flex items-center" in:fly={{ x: -30, duration: 800, delay: 200 }}>
                <div class="w-2 h-8 bg-secondary rounded-full mr-4"></div>
                Contact Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
                <!-- Email Card -->
                <a href="mailto:junedhayko502@gmail.com" class="block glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group" in:fly={{ y: 30, duration: 600, delay: 300 }}>
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                      <svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-base-content group-hover:text-primary transition-colors duration-300">Email Address</h4>
                      <p class="text-base-content/70 text-sm md:text-base wrap-break-word">junedhayko502@gmail.com</p>
                    </div>
                  </div>
                </a>

                <!-- Phone Card -->
                <a href="https://wa.me/082365265904" target="_blank" class="block glass-card rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group" in:fly={{ y: 30, duration: 600, delay: 400 }}>
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                      <svg class="h-6 w-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-base-content group-hover:text-secondary transition-colors duration-300">WhatsApp</h4>
                      <p class="text-base-content/70 text-sm md:text-base">+62 823-6526-5904</p>
                    </div>
                  </div>
                </a>

                <!-- Location Card -->
                <div class="glass-card rounded-xl p-6" in:fly={{ y: 30, duration: 600, delay: 500 }}>
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <svg class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-base-content">Location</h4>
                      <p class="text-base-content/70 text-sm md:text-base">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
