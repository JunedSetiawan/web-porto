<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let visible = $state(false);
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section id="about" class="relative py-0 overflow-hidden" bind:this={sectionRef}>
  <!-- Background decoration -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>

  <div class="section-padding">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      {#if visible}
        <div class="text-center mb-16" in:fade={{ duration: 800, delay: 100 }}>
          <div class="inline-block mb-4">
            <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              Get to know me
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            About <span class="gradient-text">Me</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
      {/if}

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Main Content -->
        <div class="space-y-6">
          {#if visible}
            <div class="glass-card p-8" in:fly={{ y: 50, duration: 800, delay: 300 }}>
              <h3 class="text-2xl font-bold mb-4 flex items-center">
                <div class="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full mr-4"></div>
                My Journey
              </h3>
              <div class="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  Hi, I'm <span class="font-semibold text-primary">Juned Setiawan</span>, a passionate Software Engineering student from Politeknik Elektronika Negeri Surabaya with a major in Informatics Engineering.
                </p>
                <p>
                  As a skilled Laravel Developer, I bring expertise in web application development and a genuine passion for creating efficient and innovative solutions. My background includes extensive experience in database design and a strong commitment to collaborative teamwork.
                </p>
                <p>
                  In the dynamic realm of web development, I stand as a dedicated professional who transforms ideas into tangible digital experiences. My journey began with a fascination for computers, which blossomed into a deep-seated passion for unraveling the intricacies of modern web technologies.
                </p>
              </div>
            </div>
          {/if}
        </div>

        <!-- Stats & Highlights -->
        <div class="space-y-6">
          {#if visible}
            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-4" in:fly={{ x: 50, duration: 800, delay: 400 }}>
              <div class="glass-card p-6 text-center hover:border-primary/50 transition-colors">
                <div class="text-3xl font-bold text-primary mb-2">1+</div>
                <div class="text-sm text-base-content/70">Years Experience</div>
              </div>
              <div class="glass-card p-6 text-center hover:border-secondary/50 transition-colors">
                <div class="text-3xl font-bold text-secondary mb-2">7+</div>
                <div class="text-sm text-base-content/70">Projects Completed</div>
              </div>
            </div>

            <!-- Core Values -->
            <div class="glass-card p-8" in:fly={{ x: 50, duration: 800, delay: 600 }}>
              <h4 class="text-xl font-bold mb-6 text-center">Core Values</h4>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 class="font-semibold text-primary">Innovation</h5>
                    <p class="text-sm text-base-content/70">
                      Continuously learning and staying up-to-date with the latest technology
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 class="font-semibold text-secondary">Collaboration</h5>
                    <p class="text-sm text-base-content/70">
                      Thriving in diverse teams and fostering innovation through shared knowledge
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 class="font-semibold text-accent">Excellence</h5>
                    <p class="text-sm text-base-content/70">
                      Committed to delivering high-quality solutions and efficient code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
