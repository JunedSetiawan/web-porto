import { component$ } from "@builder.io/qwik";
import Prisma from "~/media/prisma.svg?jsx";
import Html from "~/media/html.svg?jsx";
import Css from "~/media/css.svg?jsx";
import Bootstrap from "~/media/bootstrap.svg?jsx";
import Expressjs from "~/media/expressjs.svg?jsx";
import Git from "~/media/git.svg?jsx";
import Javascript from "~/media/javascript.svg?jsx";
import Jquery from "~/media/jquery.svg?jsx";
import Laravel from "~/media/laravel.svg?jsx";
import Livewire from "~/media/livewire.svg?jsx";
import Mysql from "~/media/mysql.svg?jsx";
import Nodejs from "~/media/nodejs.svg?jsx";
import Reactjs from "~/media/reactjs.svg?jsx";
import Tailwindcss from "~/media/tailwindcss.svg?jsx";

export default component$(() => {
  const skills = [
    { icon: Html, name: "HTML5", category: "Frontend", level: "Expert" },
    { icon: Css, name: "CSS3", category: "Frontend", level: "Expert" },
    {
      icon: Javascript,
      name: "JavaScript",
      category: "Frontend",
      level: "Advanced",
    },
    { icon: Jquery, name: "jQuery", category: "Frontend", level: "Advanced" },
    {
      icon: Bootstrap,
      name: "Bootstrap",
      category: "Framework",
      level: "Advanced",
    },
    {
      icon: Tailwindcss,
      name: "Tailwind CSS",
      category: "Framework",
      level: "Expert",
    },
    { icon: Laravel, name: "Laravel", category: "Backend", level: "Expert" },
    { icon: Livewire, name: "Livewire", category: "Framework", level: "Basic" },
    {
      icon: Nodejs,
      name: "Node.js",
      category: "Backend",
      level: "Intermediate",
    },
    {
      icon: Expressjs,
      name: "Express.js",
      category: "Backend",
      level: "Basic",
    },
    { icon: Mysql, name: "MySQL", category: "Database", level: "Advanced" },
    { icon: Prisma, name: "Prisma", category: "Database", level: "Basic" },
    { icon: Git, name: "Git", category: "Tools", level: "Advanced" },
    {
      icon: Reactjs,
      name: "React/Next.js",
      category: "Frontend",
      level: "Basic",
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
                class="px-4 py-2 text-sm font-medium rounded-full border border-base-300 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
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
                        <IconComponent
                          class="w-10 h-10 text-base-content group-hover:text-primary transition-colors duration-300"
                          alt=""
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
                    <p>• RESTful API Development</p>
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
                    <p>• XAMPP & Docker</p>
                    <p>• Figma & Adobe XD</p>
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
