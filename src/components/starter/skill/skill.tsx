import { component$, useSignal, $ } from "@builder.io/qwik";

export default component$(() => {
  const selectedCategory = useSignal("All");

  const skills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
      category: "Frontend",
      level: "Expert",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
      category: "Frontend",
      level: "Expert",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
      category: "Frontend",
      level: "Intermediate",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      name: "jQuery",
      category: "Frontend",
      level: "Intermediate",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
      category: "Framework",
      level: "Advanced",
    },
    {
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      name: "Tailwind CSS",
      category: "Framework",
      level: "Advanced",
    },
    {
      icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
      name: "Laravel",
      category: "Backend",
      level: "Advanced",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
      category: "Backend",
      level: "Intermediate",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express.js",
      category: "Backend",
      level: "Basic",
    },
    {
      icon: "https://www.vectorlogo.zone/logos/adonisjs/adonisjs-icon.svg",
      name: "AdonisJS",
      category: "Backend",
      level: "Intermediate",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      category: "Frontend",
      level: "Intermediate",
    },
    {
      icon: "https://avatars.githubusercontent.com/u/58008469?s=200&v=4",
      name: "Refine.dev",
      category: "Tools",
      level: "Intermediate",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      name: "MySQL",
      category: "Database",
      level: "Advanced",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      name: "PostgreSQL",
      category: "Database",
      level: "Intermediate",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/prisma/prisma-original.svg",
      name: "Prisma",
      category: "Database",
      level: "Basic",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
      category: "Tools",
      level: "Advanced",
    },
    {
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      name: "Postman",
      category: "Tools",
      level: "Advanced",
    },
    {
      icon: "https://raw.githubusercontent.com/gilbarbara/logos/refs/heads/main/logos/insomnia.svg",
      name: "Insomnia",
      category: "Tools",
      level: "Intermediate",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Framework",
    "Database",
    "Tools",
  ];

  const filteredSkills =
    selectedCategory.value === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory.value);

  const handleCategoryFilter = $((category: string) => {
    selectedCategory.value = category;
  });

  return (
    <section id="skill" class="relative py-0 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/4 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div class="section-padding">
        <div class="max-w-7xl mx-auto">
          {/* Section Header */}
          <div class="text-center mb-16">
            <div class="inline-block mb-4">
              <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                My Expertise
              </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Technical <span class="gradient-text">Skills</span>
            </h2>
            <p class="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
              A comprehensive overview of the technologies and tools I use to
              build modern, scalable web applications and deliver exceptional
              user experiences.
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Skills Categories Filter */}
          <div class="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick$={() => handleCategoryFilter(category)}
                class={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                  selectedCategory.value === category
                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                    : "border-base-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {filteredSkills.map((skill, index) => {
              return (
                <div
                  key={skill.name}
                  class="skill-card group cursor-pointer"
                  style={`animation-delay: ${index * 100}ms`}
                >
                  {/* Icon */}
                  <div class="flex justify-center mb-4">
                    <div class="relative">
                      <div class="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          class="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Skill level indicator */}
                      <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                        {skill.level === "Expert" && "★"}
                        {skill.level === "Advanced" && "●"}
                        {skill.level === "Intermediate" && "◐"}
                        {skill.level === "Basic" && "○"}
                      </div>
                    </div>
                  </div>

                  {/* Skill Info */}
                  <div class="text-center space-y-2">
                    <h3 class="font-semibold text-sm text-base-content group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p class="text-xs text-base-content/60 group-hover:text-base-content/80 transition-colors duration-300">
                      {skill.category}
                    </p>
                    <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span
                        class={`text-xs px-2 py-1 rounded-full font-medium ${
                          skill.level === "Expert"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : skill.level === "Advanced"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : skill.level === "Intermediate"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Section */}
          <div class="mt-16 text-center">
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
        </div>
      </div>
    </section>
  );
});
