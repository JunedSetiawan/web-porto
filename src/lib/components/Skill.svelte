<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let visible = $state(false);
  let sectionRef: HTMLElement;
  let selectedCategory = $state("All");

  const categories = ["All", "Frontend", "Backend", "Framework", "Database", "Tools"];

  const skills = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5", category: "Frontend", level: "Expert" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3", category: "Frontend", level: "Expert" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript", category: "Frontend", level: "Intermediate" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", name: "jQuery", category: "Frontend", level: "Intermediate" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap", category: "Framework", level: "Advanced" },
    { icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", name: "Tailwind CSS", category: "Framework", level: "Advanced" },
    { icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg", name: "Laravel", category: "Backend", level: "Advanced" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js", category: "Backend", level: "Intermediate" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express.js", category: "Backend", level: "Basic" },
    { icon: "https://www.vectorlogo.zone/logos/adonisjs/adonisjs-icon.svg", name: "AdonisJS", category: "Backend", level: "Intermediate" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js", category: "Frontend", level: "Intermediate" },
    { icon: "https://avatars.githubusercontent.com/u/58008469?s=200&v=4", name: "Refine.dev", category: "Tools", level: "Intermediate" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL", category: "Database", level: "Advanced" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL", category: "Database", level: "Intermediate" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/prisma/prisma-original.svg", name: "Prisma", category: "Database", level: "Basic" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", category: "Tools", level: "Advanced" },
    { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", name: "Postman", category: "Tools", level: "Advanced" },
    { icon: "https://raw.githubusercontent.com/gilbarbara/logos/refs/heads/main/logos/insomnia.svg", name: "Insomnia", category: "Tools", level: "Intermediate" }
  ];

  let filteredSkills = $derived(
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)
  );

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        visible = true;
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef) {
      observer.observe(sectionRef);
    }
    return () => observer.disconnect();
  });
</script>

<section id="skill" class="relative py-0 overflow-hidden" bind:this={sectionRef}>
  <!-- Background decoration -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-1/4 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>

  <div class="section-padding">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      {#if visible}
        <div class="text-center mb-16" in:fade={{ duration: 800 }}>
          <div class="inline-block mb-4">
            <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              My Expertise
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Technical <span class="gradient-text">Skills</span>
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
            A comprehensive overview of the technologies and tools I use to build modern, scalable web applications and deliver exceptional user experiences.
          </p>
          <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <!-- Skills Categories Filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-12" in:fly={{ y: 20, duration: 600, delay: 200 }}>
          {#each categories as category}
            <button
              class="px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 {selectedCategory === category ? 'border-primary bg-primary text-white shadow-lg shadow-primary/25' : 'border-base-300 hover:border-primary hover:bg-primary/10 hover:text-primary'}"
              onclick={() => selectedCategory = category}
            >
              {category}
            </button>
          {/each}
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {#each filteredSkills as skill, index (skill.name)}
            <div
              class="skill-card group cursor-pointer text-center"
              in:fly={{ y: 30, duration: 500, delay: 300 + (index * 50) }}
            >
              <!-- Icon -->
              <div class="flex justify-center mb-4 relative z-10">
                <div class="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <img src={skill.icon} alt={skill.name} class="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                </div>

                <!-- Skill level indicator -->
                <div class="absolute top-0 right-1/2 translate-x-10 translate-y-[-8px] w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white bg-gradient-to-r from-primary to-secondary transition-all duration-300 transform scale-0 group-hover:scale-100 shadow-md">
                  {#if skill.level === "Expert"}★{:else if skill.level === "Advanced"}●{:else if skill.level === "Intermediate"}◐{:else}○{/if}
                </div>
              </div>

              <!-- Skill Info -->
              <div class="text-center space-y-2 relative z-10">
                <h3 class="font-semibold text-sm text-base-content group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                <p class="text-xs text-base-content/60 group-hover:text-base-content/80 transition-colors duration-300">{skill.category}</p>
                <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center">
                  <span class="text-xs px-2 py-1 rounded-full font-medium shadow-sm bg-base-300 text-base-content transition-colors duration-300 group-hover:bg-primary/20 group-hover:text-primary">
                    {skill.level}
                  </span>
                </div>
              </div>

              <!-- Hover overlay -->
              <div class="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          {/each}
        </div>

        <!-- Additional Skills Section -->
        <div class="mt-16 text-center" in:fly={{ y: 30, duration: 800, delay: 600 }}>
          <div class="glass-card p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold mb-6">Additional Expertise</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="space-y-3">
                <h4 class="font-semibold text-primary">Development</h4>
                <div class="space-y-2 text-sm text-base-content/70">
                  <p>• Full Stack Development</p>
                  <p>• Database Design & Optimization</p>
                  <p>• Version Control (Git)</p>
                  <p>• Responsive Web Design</p>
                </div>
              </div>
              <div class="space-y-3">
                <h4 class="font-semibold text-secondary">Tools & Workflow</h4>
                <div class="space-y-2 text-sm text-base-content/70">
                  <p>• VS Code & PhpStorm</p>
                  <p>• Postman API Testing</p>
                  <p>• DataGrip</p>
                  <p>• Figma & Whimsical</p>
                </div>
              </div>
              <div class="space-y-3">
                <h4 class="font-semibold text-accent">Methodologies</h4>
                <div class="space-y-2 text-sm text-base-content/70">
                  <p>• Agile Development</p>
                  <p>• Test-Driven Development</p>
                  <p>• Clean Code Principles</p>
                  <p>• MVC Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
