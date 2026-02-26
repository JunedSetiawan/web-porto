<script lang="ts">
  import { onMount, tick } from "svelte";
  import { fade, fly } from "svelte/transition";

  let visible = $state(false);
  let sectionRef: HTMLElement;

  const projects = [
    {
      id: "1",
      title: "Zera Dashboard Laravel",
      subtitle: "Starter Template Dashboard Laravel",
      image: "/media/pr-image/zeralight.png",
      category: "Web Application",
      tech: ["Laravel", "Splade", "DaisyUI", "MySQL"],
      status: "Completed",
      description: "The Open Source Starter Template Dashboard for Laravel uses the splade package and the Daisy UI Component. This template has several components and an attractive dashboard design with several helpers to make it easier to develop applications and documentation to make it easier to use with the help of my colleagues.",
      screenshots: [
        { image: "/media/pr-image/zeralogin.png", title: "Login Page" },
        { image: "/media/pr-image/zeralight.png", title: "Light Mode" },
        { image: "/media/pr-image/zeradark.png", title: "Dark Mode" },
        { image: "/media/pr-image/zeraprofile.png", title: "Profile Page" },
        { image: "/media/pr-image/zerafitur.png", title: "Components & Helper" },
      ],
      links: { github: "https://github.com/JunedSetiawan/zera-dashboard" }
    },
    {
      id: "2",
      title: "Survey Information System",
      subtitle: "Survey Management System Web",
      image: "/media/pr-image/dashsurvei.png",
      category: "Information System",
      tech: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
      status: "Completed",
      description: "This web information system is to facilitate the management of surveys that have been filled in by applicants who go to the investment office, who previously used the Google form to fill out surveys. In this information system there are filters to handle surveys in the form of date ranges, checkboxes for answers from applicants, etc. and also has an export feature for daily or weekly reports.",
      screenshots: [
        { image: "/media/pr-image/formsurvei.png", title: "Form Survey" },
        { image: "/media/pr-image/loginsurvei.png", title: "Login Page" },
        { image: "/media/pr-image/dashsurvei.png", title: "Dashboard Page" },
        { image: "/media/pr-image/fitursurvei.png", title: "User Management" },
        { image: "/media/pr-image/fitur2survei.png", title: "Summary Count Survey Page" },
        { image: "/media/pr-image/fitur3survei.png", title: "Report Filter Page" },
      ],
      links: { github: "https://github.com/JunedSetiawan/si-survei" }
    },
    {
      id: "3",
      title: "Blog Post Web Splade",
      subtitle: "News & Blog Platform",
      image: "/media/blog-splade/homepage.png",
      category: "Content Management",
      tech: ["Laravel", "Splade", "MySQL", "Tailwind CSS"],
      status: "Completed",
      description: "A SPA website to publish news posts or blogs with various features by slicing designs from several website references. The features are search post filters, post category filters, post likes and comments, post reports. All features work well with good RBAC.",
      screenshots: [
        { image: "/media/blog-splade/homepage.png", title: "Home Page" },
        { image: "/media/blog-splade/postpage.png", title: "Post Page" },
        { image: "/media/blog-splade/categorypage.png", title: "Category Page" },
        { image: "/media/blog-splade/personalpage.png", title: "Personal Page" },
        { image: "/media/blog-splade/savedpost.png", title: "Saved Post Page" },
        { image: "/media/blog-splade/showpage1.png", title: "Show Page 1" },
        { image: "/media/blog-splade/showpage2.png", title: "Show Page 2" },
        { image: "/media/blog-splade/dashboardposts.png", title: "Dashboard Posts" },
        { image: "/media/blog-splade/dashboarduser.png", title: "Dashboard User" },
        { image: "/media/blog-splade/dashboardreport.png", title: "Dashboard Report" },
        { image: "/media/blog-splade/dashboardaccept.png", title: "Accept takedown post" },
      ],
      links: { github: "https://github.com/JunedSetiawan/blog-splade" }
    },
    {
      id: "4",
      title: "System Inventory Web",
      subtitle: "System Inventory App",
      image: "/media/pr-image/zeralogin.png", // Fallback used in old code
      category: "Business Application",
      tech: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
      status: "Completed",
      description: "Website for inventory management, purchasing, sales, and manager with RBAC running well",
      links: { github: "https://github.com/JunedSetiawan/inventori-app" }
    },
    {
      id: "5",
      title: "Abacanto Holding Company Profile",
      subtitle: "Corporate Website with CMS",
      image: "/media/freelance/abacanto.png",
      category: "Corporate Website",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "CMS"],
      status: "Live",
      description: "Freelance project developing a complete company profile website with custom CMS. I was responsible for front-end development, creating all pages and form controls for the CMS. Also provided bug fixes and improvements to the CMS dashboard created by my colleague.",
      links: { demo: "https://abacantoholding.com/" }
    },
    {
      id: "6",
      title: "Gallimard Advisory Company Profile",
      subtitle: "Professional Services Website",
      image: "/media/freelance/gallimard.png",
      category: "Corporate Website",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "CMS"],
      status: "Live",
      description: "Another freelance company profile project with integrated CMS solution. Handled complete front-end development including responsive design, form controls, and user interface for content management. Collaborated with backend developer to ensure seamless CMS functionality.",
      links: { demo: "https://gallimardadvisory.com/" }
    },
    {
      id: "7",
      title: "Counseling Guidance Recording Information System",
      subtitle: "Student Counseling Management System",
      image: "/media/freelance/counseling.png",
      category: "Information System",
      tech: ["Next.js", "Refine.dev", "AdonisJS", "RBAC", "PWA", "PostgreSQL"],
      status: "Completed",
      description: "Website that manages information sources on Regulations, Violations, Order Awards, Counselling, Home Visits and Student Calls. On this website there is also a recap of violations and awards, lots of filters and a beautiful and optimal dashboard. For the frontend system, use NextJS from refine.dev. Backend uses AdonisJS with RBAC and JWT http-cookie which is safe from both the client and server sides. And it's also equipped with PWA so it's easy to access.",
      links: { github: "https://github.com/JunedSetiawan/fe-simbah-bk" }
    }
  ];

  let activeProject = $state<any>(null);
  let dialog: HTMLDialogElement;

  function openModal(project: any) {
    activeProject = project;
    setTimeout(() => {
      dialog?.showModal();
    }, 10);
  }

  function closeModal() {
    dialog?.close();
    setTimeout(() => {
      activeProject = null;
    }, 300);
  }

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

<section id="portfolio" class="relative py-0 overflow-hidden" bind:this={sectionRef}>
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
  </div>

  <div class="section-padding">
    <div class="max-w-7xl mx-auto">
      {#if visible}
        <div class="text-center mb-16" in:fade={{ duration: 800 }}>
          <div class="inline-block mb-4">
            <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              My Work
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Featured <span class="gradient-text">Projects</span>
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
            A showcase of my recent projects demonstrating expertise in full-stack development, modern web technologies, and user-centered design principles.
          </p>
          <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          {#each projects as project, index}
            <div class="portfolio-card glass-card hover:scale-[1.02] cursor-pointer group" in:fly={{ y: 50, duration: 800, delay: index * 100 }} onclick={() => openModal(project)} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(project); }} role="button" tabindex="0">
              <div class="relative overflow-hidden rounded-t-2xl">
                <img src={project.image} alt={project.title} class="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div class="absolute inset-0 bg-base-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 rounded-full text-xs font-medium shadow-md {project.status === 'Completed' ? 'bg-green-500 text-white' : project.status === 'Work in Progress' ? 'bg-orange-500 text-white' : 'bg-blue-500 text-white'}">
                    {project.status}
                  </span>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium backdrop-blur-sm border-primary/30 shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span class="text-sm text-base-content/60 mt-1 block">
                    {project.subtitle}
                  </span>
                </div>
                <p class="text-base-content/70 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div class="flex flex-wrap gap-2 items-center justify-between mt-4 border-t border-base-content/10 pt-4">
                  <div class="flex flex-wrap gap-2">
                    {#each project.tech as tech}
                      <span class="px-2 py-1 bg-base-300/50 text-base-content/80 rounded text-xs font-medium border border-base-content/5">
                        {tech}
                      </span>
                    {/each}
                  </div>
                  
                  <div class="text-primary font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    View Project <span class="ml-1">→</span>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <div class="text-center" in:fly={{ y: 20, duration: 600, delay: 600 }}>
          <a href="https://github.com/JunedSetiawan" target="_blank" class="px-6 py-3 border border-base-300 rounded-lg hover:border-primary hover:text-primary transition-colors font-medium">
            View All Projects
          </a>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Modal -->
<dialog bind:this={dialog} class="modal rounded-2xl bg-base-100/95 backdrop-blur-xl border border-base-content/10 shadow-2xl text-base-content p-0 max-w-4xl w-full max-h-[90vh] overflow-hidden m-auto" oncancel={closeModal}>
  {#if activeProject}
    <div class="flex flex-col h-full max-h-[90vh]">
      <!-- Header -->
      <div class="flex justify-between items-center p-6 border-b border-base-content/10 sticky top-0 bg-base-100/80 backdrop-blur-md z-10">
        <h3 class="text-2xl font-bold solid-text">{activeProject.title}</h3>
        <button onclick={closeModal} class="p-2 hover:bg-base-200 rounded-full transition-colors" aria-label="Close">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      
      <!-- Content -->
      <div class="p-6 overflow-y-auto space-y-8">
        <p class="text-base-content/80 text-lg leading-relaxed">
          {activeProject.description}
        </p>

        {#if activeProject.screenshots && activeProject.screenshots.length > 0}
          <div class="space-y-6">
            <h4 class="text-xl font-semibold border-b border-base-content/10 pb-2">Screenshots</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {#each activeProject.screenshots as screenshot}
                <div class="space-y-2">
                  <p class="text-sm font-medium text-base-content/80 text-center">{screenshot.title}</p>
                  <img src={screenshot.image} alt={screenshot.title} class="w-full rounded-xl shadow-lg border border-base-content/5" loading="lazy" />
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <!-- Footer (Links) -->
      <div class="p-6 border-t border-base-content/10 sticky bottom-0 bg-base-100/80 backdrop-blur-md z-10 flex gap-4">
        {#if activeProject.links?.github}
          <a href={activeProject.links.github} target="_blank" class="px-5 py-2.5 bg-base-300 hover:bg-base-200 text-base-content rounded-lg transition-colors flex items-center font-medium">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Source Code
          </a>
        {/if}
        {#if activeProject.links?.demo}
          <a href={activeProject.links.demo} target="_blank" class="px-5 py-2.5 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors flex items-center font-medium shadow-lg shadow-primary/30">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            Live Demo
          </a>
        {/if}
      </div>
    </div>
  {/if}
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
  }
</style>
