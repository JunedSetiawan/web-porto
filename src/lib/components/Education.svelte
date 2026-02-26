<script lang="ts">
  import { onMount, tick } from "svelte";
  import { fade, fly, slide } from "svelte/transition";

  let visible = $state(false);
  let sectionRef: HTMLElement;
  
  let activeTab = $state("Education");
  const tabs = ["Education", "Experience", "Achievement", "Certificate"];

  // Function to switch tabs
  function setTab(tab: string) {
    if (activeTab === tab) return;
    activeTab = tab;
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });
</script>

<section id="education" class="relative py-0 overflow-hidden" bind:this={sectionRef}>
  <!-- Background decoration -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-1/4 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>

  <div class="section-padding">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      {#if visible}
        <div class="text-center mb-16" in:fade={{ duration: 800 }}>
          <div class="inline-block mb-4">
            <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              My Journey
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Education & <span class="gradient-text">Experience</span>
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
            My educational background and achievements that shaped my expertise in web development and technology.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
      {/if}

      {#if visible}
        <!-- Tabs -->
        <div in:fly={{ y: 30, duration: 800, delay: 200 }}>
          <div class="flex justify-center flex-wrap gap-4 mb-12">
            {#each tabs as tab}
              <button
                class="px-5 py-2.5 rounded-lg border transition-all duration-300 font-semibold flex items-center {activeTab === tab ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' : 'btn-outline border-base-300 text-base-content/70 hover:border-primary hover:text-primary'}"
                onclick={() => setTab(tab)}
              >
                {#if tab === "Education"}
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"/>
                  </svg>
                {:else if tab === "Experience"}
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"/>
                  </svg>
                {:else if tab === "Achievement"}
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                {:else if tab === "Certificate"}
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                {/if}
                {tab}
              </button>
            {/each}
          </div>

          <!-- Tab Content Area -->
          <div class="mt-10 min-h-[500px] relative">
            {#if activeTab === "Education"}
              <div transition:fade={{ duration: 400 }} class="absolute w-full top-0 left-0">
                <div class="max-w-4xl mx-auto space-y-8">
                  <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                    <div class="space-y-12">
                      <div class="timeline-item">
                        <div class="timeline-dot bg-gradient-to-r from-primary to-secondary"></div>
                        <div class="glass-card p-6 ml-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 class="text-xl font-bold text-primary">Politeknik Elektronika Negeri Surabaya</h3>
                              <p class="text-base-content/80 font-medium">Associate Degree - Informatics Engineering</p>
                            </div>
                            <span class="text-sm text-base-content/60 bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0">August 2022 - Present</span>
                          </div>
                          <p class="text-base-content/70">
                            Pursuing comprehensive education in software development, database management, web technologies, and system analysis. Focus on practical application of programming languages and modern development frameworks.
                          </p>
                          <div class="flex flex-wrap gap-2 mt-4">
                            {#each ["Software Engineering", "Database Design", "Web Development", "System Analysis"] as skill}
                              <span class="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{skill}</span>
                            {/each}
                          </div>
                        </div>
                      </div>

                      <div class="timeline-item">
                        <div class="timeline-dot bg-gradient-to-r from-secondary to-accent"></div>
                        <div class="glass-card p-6 ml-6 transition-all hover:-translate-y-1 hover:border-accent/50">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 class="text-xl font-bold text-accent">SMK Negeri 1 Jenangan Ponorogo</h3>
                              <p class="text-base-content/80 font-medium">Vocational High School - Software Engineering</p>
                            </div>
                            <span class="text-sm text-base-content/60 bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0">July 2019 - June 2022</span>
                          </div>
                          <p class="text-base-content/70">
                            Specialized in software engineering with focus on programming fundamentals, software development lifecycle, and basic web technologies. Built strong foundation in problem-solving and logical thinking.
                          </p>
                          <div class="flex flex-wrap gap-2 mt-4">
                            {#each ["Programming Fundamentals", "Software Development", "Web Basics", "Problem Solving"] as skill}
                              <span class="px-2 py-1 bg-accent/10 text-accent rounded text-xs">{skill}</span>
                            {/each}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}

            {#if activeTab === "Experience"}
              <div transition:fade={{ duration: 400 }} class="absolute w-full top-0 left-0">
                <div class="max-w-4xl mx-auto space-y-8">
                  <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent"></div>
                    <div class="space-y-12">
                      <div class="timeline-item">
                        <div class="timeline-dot bg-gradient-to-r from-primary to-accent"></div>
                        <div class="glass-card p-6 ml-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 class="text-xl font-bold text-primary">Freelance Web Developer</h3>
                              <p class="text-base-content/80 font-medium">Laravel Web Developer</p>
                            </div>
                            <span class="text-sm text-white bg-green-500/80 px-3 py-1 rounded-full mt-2 md:mt-0 flex items-center">
                              <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                              May 2024 - Present
                            </span>
                          </div>
                          <p class="text-base-content/70 mb-4">
                            Create a Company Profile website with CMS using Laravel framework. Developing modern, responsive web applications with focus on performance, user experience, and maintainable code architecture with my friend.
                          </p>
                          <div class="space-y-3">
                            <h4 class="font-semibold text-primary">Key Responsibilities:</h4>
                            <ul class="text-sm text-base-content/70 space-y-1 ml-4">
                              <li class="flex items-start"><span class="text-primary mr-2">•</span>Full-stack web development using Laravel framework</li>
                              <li class="flex items-start"><span class="text-primary mr-2">•</span>Content Management System (CMS) development</li>
                              <li class="flex items-start"><span class="text-primary mr-2">•</span>Database design and optimization</li>
                              <li class="flex items-start"><span class="text-primary mr-2">•</span>Responsive design implementation</li>
                            </ul>
                          </div>
                          <div class="flex flex-wrap gap-2 mt-4">
                            {#each ["Laravel", "PHP", "PostgreSQL", "HTML/CSS", "JavaScript", "Tailwind CSS", "Node.js"] as skill}
                              <span class="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{skill}</span>
                            {/each}
                          </div>
                        </div>
                      </div>

                      <div class="timeline-item">
                        <div class="timeline-dot bg-gradient-to-r from-accent to-primary"></div>
                        <div class="glass-card p-6 ml-6 transition-all hover:-translate-y-1 hover:border-accent/50">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 class="text-xl font-bold text-accent">PKL/Vocational School Internship</h3>
                              <p class="text-base-content/80 font-medium">Web PHP Developer - Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu</p>
                            </div>
                            <span class="text-sm text-base-content/60 bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0">January 2021 - June 2021</span>
                          </div>
                          <p class="text-base-content/70 mb-4">
                            Create a survey information system web application, as a replacement for surveys carried out on Google Forms by registrants at the Office. Gained hands-on experience in government sector web development and user requirement analysis.
                          </p>
                          <div class="space-y-3">
                            <h4 class="font-semibold text-accent">Key Achievements:</h4>
                            <ul class="text-sm text-base-content/70 space-y-1 ml-4">
                              <li class="flex items-start"><span class="text-accent mr-2">•</span>Developed complete survey information system from scratch</li>
                              <li class="flex items-start"><span class="text-accent mr-2">•</span>Replaced manual Google Forms process with automated web system</li>
                              <li class="flex items-start"><span class="text-accent mr-2">•</span>Collaborated with government office staff for requirements gathering</li>
                              <li class="flex items-start"><span class="text-accent mr-2">•</span>Improved office efficiency through digital transformation</li>
                            </ul>
                          </div>
                          <div class="flex flex-wrap gap-2 mt-4">
                            {#each ["PHP", "Web Development", "Survey System", "Database Design", "Government Sector"] as skill}
                              <span class="px-2 py-1 bg-accent/10 text-accent rounded text-xs">{skill}</span>
                            {/each}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}

            {#if activeTab === "Achievement"}
              <div transition:fade={{ duration: 400 }} class="absolute w-full top-0 left-0">
                <div class="max-w-4xl mx-auto space-y-8">
                  <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                    <div class="space-y-12">
                      <div class="timeline-item">
                        <div class="timeline-dot bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-1">
                          <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div class="glass-card p-6 ml-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 class="text-xl font-bold text-primary">KKSI Smart School 2021</h3>
                              <p class="text-base-content/80 font-medium">Data Science Competition</p>
                            </div>
                            <span class="text-sm text-base-content/60 bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0">2021</span>
                          </div>
                          <p class="text-base-content/70">
                            Participated in the 2021 KKSI (Kamp Kreatif SMK Indonesia) Smart School competition in the Data Science field, demonstrating analytical skills and data processing capabilities.
                          </p>
                          <div class="flex flex-wrap gap-2 mt-4">
                            {#each ["Data Science", "Analytics", "Problem Solving", "Competition"] as skill}
                              <span class="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{skill}</span>
                            {/each}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Achievement Summary -->
                  <div class="mt-12 text-center">
                    <div class="glass-card p-8">
                      <h3 class="text-2xl font-bold mb-6">Key Achievements</h3>
                      <div class="grid md:grid-cols-3 gap-6">
                        <div class="space-y-3">
                          <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                          </div>
                          <h4 class="font-semibold text-primary">Innovation</h4>
                          <p class="text-sm text-base-content/70">Demonstrated innovative thinking in data science competitions and academic projects</p>
                        </div>
                        <div class="space-y-3">
                          <div class="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mx-auto">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                          </div>
                          <h4 class="font-semibold text-secondary">Leadership</h4>
                          <p class="text-sm text-base-content/70">Active participation in team-based competitions and collaborative projects</p>
                        </div>
                        <div class="space-y-3">
                          <div class="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mx-auto">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                          </div>
                          <h4 class="font-semibold text-accent">Performance</h4>
                          <p class="text-sm text-base-content/70">Consistently achieving high standards in academic and professional pursuits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}

            {#if activeTab === "Certificate"}
              <div transition:fade={{ duration: 400 }} class="absolute w-full top-0 left-0">
                <div class="max-w-4xl mx-auto space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
                  <div class="glass-card p-6 group hover:scale-105 transition-transform duration-300 border-base-300 hover:border-primary/50 cursor-pointer">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shrink-0">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="text-lg font-bold text-primary mb-2">Competency Test Certificate 2022</h3>
                        <p class="text-base-content/70 text-sm mb-4">Achieved "Very Competent" certification demonstrating excellence in software engineering competencies and practical skills.</p>
                        <a href="https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv" target="_blank" class="text-base-content/80 hover:text-primary transition-colors text-sm font-semibold flex items-center">
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="glass-card p-6 group hover:scale-105 transition-transform duration-300 border-base-300 hover:border-secondary/50 cursor-pointer">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center shrink-0">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="text-lg font-bold text-secondary mb-2">KKSI Certificate 2021</h3>
                        <p class="text-base-content/70 text-sm mb-4">Certificate from Kamp Kreatif SMK Indonesia (KKSI) 2021 with a "good reputation" achievement.</p>
                        <a href="https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv" target="_blank" class="text-base-content/80 hover:text-secondary transition-colors text-sm font-semibold flex items-center">
                          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
