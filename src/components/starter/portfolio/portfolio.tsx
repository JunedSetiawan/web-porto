import { component$ } from "@builder.io/qwik";
import Modal from "~/components/modal";
import Zeralight from "~/media/pr-image/zeralight.png?jsx";
import Zeradark from "~/media/pr-image/zeradark.png?jsx";
import Zeralogin from "~/media/pr-image/zeralogin.png?jsx";
import Zeraprofile from "~/media/pr-image/zeraprofile.png?jsx";
import Zerafitur from "~/media/pr-image/zerafitur.png?jsx";

// dashsurvei
import Dashsurvei from "~/media/pr-image/dashsurvei.png?jsx";
import LoginSurvei from "~/media/pr-image/loginsurvei.png?jsx";
import FormSurvei from "~/media/pr-image/formsurvei.png?jsx";
import FiturSurvei from "~/media/pr-image/fitursurvei.png?jsx";
import FiturSurvei2 from "~/media/pr-image/fitur2survei.png?jsx";
import FiturSurvei3 from "~/media/pr-image/fitur3survei.png?jsx";

// blog splade
import HomePage from "~/media/blog-splade/homepage.png?jsx";
import PostPage from "~/media/blog-splade/postpage.png?jsx";
import CategoryPage from "~/media/blog-splade/categorypage.png?jsx";
import PersonalPage from "~/media/blog-splade/personalpage.png?jsx";
import SavedPost from "~/media/blog-splade/savedpost.png?jsx";
import ShowPage1 from "~/media/blog-splade/showpage1.png?jsx";
import ShowPage2 from "~/media/blog-splade/showpage2.png?jsx";
import DashboardPosts from "~/media/blog-splade/dashboardposts.png?jsx";
import DashboardUser from "~/media/blog-splade/dashboarduser.png?jsx";
import DashboardReport from "~/media/blog-splade/dashboardreport.png?jsx";
import DashboardAccept from "~/media/blog-splade/dashboardaccept.png?jsx";
// other projects
import Abacanto from "~/media/freelance/abacanto.png?jsx";
import Gallimard from "~/media/freelance/gallimard.png?jsx";
import Counseling from "~/media/freelance/counseling.png?jsx";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const projects = [
    {
      id: "1",
      title: "Zera Dashboard Laravel",
      subtitle: "Starter Template Dashboard Laravel",
      image: Zeralight,
      category: "Web Application",
      tech: ["Laravel", "Splade", "DaisyUI", "MySQL"],
      status: "Completed",
      description:
        "The Open Source Starter Template Dashboard for Laravel uses the splade package and the Daisy UI Component. This template has several components and an attractive dashboard design with several helpers to make it easier to develop applications and documentation to make it easier to use with the help of my colleagues.",
      screenshots: [
        { component: Zeralogin, title: "Login Page" },
        { component: Zeralight, title: "Light Mode" },
        { component: Zeradark, title: "Dark Mode" },
        { component: Zeraprofile, title: "Profile Page" },
        { component: Zerafitur, title: "Components & Helper" },
      ],
      links: {
        github: "https://github.com/JunedSetiawan/zera-dashboard",
        demo: "#",
      },
    },
    {
      id: "2",
      title: "Survey Information System",
      subtitle: "Survey Management System Web",
      image: Dashsurvei,
      category: "Information System",
      tech: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
      status: "Completed",
      description:
        "This web information system is to facilitate the management of surveys that have been filled in by applicants who go to the investment office, who previously used the Google form to fill out surveys. In this information system there are filters to handle surveys in the form of date ranges, checkboxes for answers from applicants, etc. and also has an export feature for daily or weekly reports.",
      screenshots: [
        { component: FormSurvei, title: "Form Survey" },
        { component: LoginSurvei, title: "Login Page" },
        { component: Dashsurvei, title: "Dashboard Page" },
        { component: FiturSurvei, title: "User Management" },
        { component: FiturSurvei2, title: "Summary Count Survey Page" },
        { component: FiturSurvei3, title: "Report Filter Page" },
      ],
      links: {
        github: "https://github.com/JunedSetiawan/si-survei",
      },
    },
    {
      id: "3",
      title: "Blog Post Web Splade",
      subtitle: "News & Blog Platform",
      image: HomePage,
      category: "Content Management",
      tech: ["Laravel", "Splade", "MySQL", "Tailwind CSS"],
      status: "Completed",
      description:
        "A SPA website to publish news posts or blogs with various features by slicing designs from several website references. The features are search post filters, post category filters, post likes and comments, post reports. All features work well with good RBAC.",
      screenshots: [
        { component: HomePage, title: "Home Page" },
        { component: PostPage, title: "Post Page" },
        { component: CategoryPage, title: "Category Page" },
        { component: PersonalPage, title: "Personal Page" },
        { component: SavedPost, title: "Saved Post Page" },
        { component: ShowPage1, title: "Show Page 1" },
        { component: ShowPage2, title: "Show Page 2" },
        { component: DashboardPosts, title: "Dashboard Posts" },
        { component: DashboardUser, title: "Dashboard User" },
        { component: DashboardReport, title: "Dashboard Report" },
        { component: DashboardAccept, title: "Accept takedown post" },
      ],
      links: {
        github: "https://github.com/JunedSetiawan/blog-splade",
      },
    },
    {
      id: "4",
      title: "System Inventory Web",
      subtitle: "System Inventory App",
      image: Zeralogin,
      category: "Business Application",
      tech: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
      status: "Completed",
      description:
        "Website for inventory management, purchasing, sales, and manager with RBAC running well",
      links: {
        github: "https://github.com/JunedSetiawan/inventori-app",
      },
    },
    {
      id: "5",
      title: "Abacanto Holding Company Profile",
      subtitle: "Corporate Website with CMS",
      image: Abacanto,
      category: "Corporate Website",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "CMS"],
      status: "Live",
      description:
        "Freelance project developing a complete company profile website with custom CMS. I was responsible for front-end development, creating all pages and form controls for the CMS. Also provided bug fixes and improvements to the CMS dashboard created by my colleague.",
      links: {
        demo: "https://abacantoholding.com/",
      },
    },
    {
      id: "6",
      title: "Gallimard Advisory Company Profile",
      subtitle: "Professional Services Website",
      image: Gallimard,
      category: "Corporate Website",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "CMS"],
      status: "Live",
      description:
        "Another freelance company profile project with integrated CMS solution. Handled complete front-end development including responsive design, form controls, and user interface for content management. Collaborated with backend developer to ensure seamless CMS functionality.",
      links: {
        demo: "https://gallimardadvisory.com/",
      },
    },
    {
      id: "7",
      title: "Counseling Guidance Recording Information System",
      subtitle: "Student Counseling Management System",
      image: Counseling,
      category: "Information System",
      tech: ["Next.js", "Refine.dev", "AdonisJS", "RBAC", "PWA", "PostgreSQL"],
      status: "Completed",
      description:
        "Website that manages information sources on Regulations, Violations, Order Awards, Counselling, Home Visits and Student Calls. On this website there is also a recap of violations and awards, lots of filters and a beautiful and optimal dashboard. For the frontend system, use NextJS from refine.dev. Backend uses AdonisJS with RBAC and JWT http-cookie which is safe from both the client and server sides. And it's also equipped with PWA so it's easy to access.",
      links: {
        github: "https://github.com/JunedSetiawan/fe-simbah-bk",
      },
    },
  ];

  return (
    <span id="portfolio" class="relative py-0 overflow-hidden block">
      <span class="absolute inset-0 -z-10">
        <span class="absolute top-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></span>
        <span class="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></span>
      </span>

      <span class="section-padding block">
        <span class="max-w-7xl mx-auto block">
          <span class="text-center mb-16 block">
            <span class="inline-block mb-4">
              <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                My Work
              </span>
            </span>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Featured <span class="gradient-text">Projects</span>
            </h2>
            <span class="text-lg text-base-content/70 max-w-2xl mx-auto mb-8 block">
              A showcase of my recent projects demonstrating expertise in
              full-stack development, modern web technologies, and user-centered
              design principles.
            </span>
            <span class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full block"></span>
          </span>

          <span class="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => {
              const ImageComponent = project.image;
              return (
                <span
                  key={project.id}
                  class="portfolio-card card-hover block"
                  style={`animation-delay: ${index * 150}ms`}
                >
                  <span class="relative overflow-hidden block">
                    <ImageComponent
                      loading="lazy"
                      class="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={project.title}
                    />

                    <span class="absolute inset-0 bg-gradient-to-t from-base-300/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    <span class="absolute top-4 right-4">
                      <span
                        class={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : project.status === "Work in Progress"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </span>

                    <span class="absolute top-4 left-4">
                      <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium backdrop-blur-sm border border-primary/30">
                        {project.category}
                      </span>
                    </span>
                  </span>

                  <span class="p-6 space-y-4 block">
                    <span class="block">
                      <Modal id={`title-${project.id}`}>
                        <span q:slot="header">
                          <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                        </span>
                        <span q:slot="title">
                          <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300 cursor-pointer hover:underline">
                            {project.title}
                          </h3>
                        </span>
                        <span q:slot="content">
                          <span class="space-y-6 block">
                            <span class="text-base-content/80 block">
                              {project.description}
                            </span>

                            {project.screenshots && (
                              <span class="block">
                                <span class="font-semibold mb-4 text-center">
                                  Screenshots
                                </span>
                                <span class="grid grid-cols-1 gap-6 place-items-center">
                                  {project.screenshots.map((screenshot) => {
                                    const ScreenshotComponent =
                                      screenshot.component;
                                    return (
                                      <span
                                        key={screenshot.title}
                                        class="text-center block"
                                      >
                                        <span class="text-sm font-medium mb-2 block">
                                          {screenshot.title}
                                        </span>
                                        <ScreenshotComponent
                                          loading="lazy"
                                          class="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                      </span>
                                    );
                                  })}
                                </span>
                              </span>
                            )}

                            {project.links && (
                              <span class="flex gap-3 pt-4 border-t border-base-300">
                                {project.links.github && (
                                  <Link
                                    href={project.links.github}
                                    target="_blank"
                                    class="btn btn-outline btn-sm"
                                  >
                                    <svg
                                      class="w-4 h-4 mr-2"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Source Code
                                  </Link>
                                )}
                                {project.links.demo && (
                                  <Link
                                    href={project.links.demo}
                                    target="_blank"
                                    class="btn btn-primary btn-sm"
                                  >
                                    <svg
                                      class="w-4 h-4 mr-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                    Live Demo
                                  </Link>
                                )}
                              </span>
                            )}
                          </span>
                        </span>
                      </Modal>
                      <span class="text-sm text-base-content/60 mt-1 block">
                        {project.subtitle}
                      </span>
                    </span>

                    <span class="text-base-content/70 text-sm leading-relaxed line-clamp-3 block">
                      {project.description}
                    </span>

                    <span class="flex flex-wrap gap-2 items-center justify-between">
                      <span class="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            class="px-2 py-1 bg-base-200 text-base-content/80 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </span>

                      {project.links?.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          class="btn btn-outline btn-sm ml-2"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </Link>
                      )}
                    </span>
                  </span>
                </span>
              );
            })}
          </span>

          <span class="text-center block">
            <Link
              href="https://github.com/JunedSetiawan"
              target="_blank"
              class="btn btn-outline"
            >
              View All Projects
            </Link>
          </span>
        </span>
      </span>
    </span>
  );
});
