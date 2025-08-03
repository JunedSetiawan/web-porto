import { component$ } from "@builder.io/qwik";
import { Tabs, TabList, Tab, TabPanel } from "@qwik-ui/headless";
import { Link } from "@builder.io/qwik-city";
import Achievement from "../achievement/achievement";

export default component$(() => {
  return (
    <section id="education" class="relative py-0 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/4 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div class="section-padding">
        <div class="max-w-6xl mx-auto">
          {/* Section Header */}
          <div class="text-center mb-16">
            <div class="inline-block mb-4">
              <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                My Journey
              </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Education & <span class="gradient-text">Experience</span>
            </h2>
            <p class="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
              My educational background and achievements that shaped my
              expertise in web development and technology.
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Tabs */}
          <div class="tabs-example">
            <Tabs behavior="manual">
              <TabList class="flex justify-center flex-wrap gap-4 mb-12">
                <Tab class="btn btn-outline hover:btn-primary transition-all duration-300 font-semibold">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"
                    />
                  </svg>
                  Education
                </Tab>
                <Tab class="btn btn-outline hover:btn-primary transition-all duration-300 font-semibold">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                    />
                  </svg>
                  Experience
                </Tab>
                <Tab class="btn btn-outline hover:btn-primary transition-all duration-300 font-semibold">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Achievement
                </Tab>
                <Tab class="btn btn-outline hover:btn-primary transition-all duration-300 font-semibold">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Certificate
                </Tab>
              </TabList>

              {/* Education Tab */}
              <TabPanel class="mt-10">
                <div class="max-w-4xl mx-auto">
                  <div class="space-y-8">
                    {/* Timeline */}
                    <div class="relative">
                      {/* Timeline Line */}
                      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

                      {/* Education Items */}
                      <div class="space-y-12">
                        {/* Politeknik */}
                        <div class="timeline-item">
                          <div class="timeline-dot bg-gradient-to-r from-primary to-secondary"></div>
                          <div class="glass-card p-6 ml-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 class="text-xl font-bold text-primary">
                                  Politeknik Elektronika Negeri Surabaya
                                </h3>
                                <p class="text-base-content/80 font-medium">
                                  Associate Degree - Informatics Engineering
                                </p>
                              </div>
                              <span class="text-sm text-base-content/60 bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                                August 2022 - Present
                              </span>
                            </div>
                            <p class="text-base-content/70">
                              Pursuing comprehensive education in software
                              development, database management, web
                              technologies, and system analysis. Focus on
                              practical application of programming languages and
                              modern development frameworks.
                            </p>
                            <div class="flex flex-wrap gap-2 mt-4">
                              {[
                                "Software Engineering",
                                "Database Design",
                                "Web Development",
                                "System Analysis",
                              ].map((skill) => (
                                <span
                                  key={skill}
                                  class="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* SMK */}
                        <div class="timeline-item">
                          <div class="timeline-dot bg-gradient-to-r from-secondary to-accent"></div>
                          <div class="glass-card p-6 ml-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 class="text-xl font-bold text-accent">
                                  SMK Negeri 1 Jenangan Ponorogo
                                </h3>
                                <p class="text-base-content/80 font-medium">
                                  Vocational High School - Software Engineering
                                </p>
                              </div>
                              <span class="text-sm text-base-content/60 bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                                July 2019 - June 2022
                              </span>
                            </div>
                            <p class="text-base-content/70">
                              Specialized in software engineering with focus on
                              programming fundamentals, software development
                              lifecycle, and basic web technologies. Built
                              strong foundation in problem-solving and logical
                              thinking.
                            </p>
                            <div class="flex flex-wrap gap-2 mt-4">
                              {[
                                "Programming Fundamentals",
                                "Software Development",
                                "Web Basics",
                                "Problem Solving",
                              ].map((skill) => (
                                <span
                                  key={skill}
                                  class="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Experience Tab */}
              <TabPanel class="mt-10">
                <div class="max-w-4xl mx-auto">
                  <div class="space-y-8">
                    {/* Timeline */}
                    <div class="relative">
                      {/* Timeline Line */}
                      <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent"></div>

                      {/* Experience Items */}
                      <div class="space-y-12">
                        {/* Current Freelance */}
                        <div class="timeline-item">
                          <div class="timeline-dot bg-gradient-to-r from-primary to-accent"></div>
                          <div class="glass-card p-6 ml-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 class="text-xl font-bold text-primary">
                                  Freelance Web Developer
                                </h3>
                                <p class="text-base-content/80 font-medium">
                                  Laravel Web Developer
                                </p>
                              </div>
                              <span class="text-sm text-white bg-green-500 px-3 py-1 rounded-full mt-2 md:mt-0 flex items-center">
                                <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                                May 2024 - Present
                              </span>
                            </div>
                            <p class="text-base-content/70 mb-4">
                              Create a Company Profile website with CMS using
                              Laravel framework. Developing modern, responsive
                              web applications with focus on performance, user
                              experience, and maintainable code architecture
                              with my friend.
                            </p>
                            <div class="space-y-3">
                              <h4 class="font-semibold text-primary">
                                Key Responsibilities:
                              </h4>
                              <ul class="text-sm text-base-content/70 space-y-1 ml-4">
                                <li class="flex items-start">
                                  <span class="text-primary mr-2">•</span>
                                  Full-stack web development using Laravel
                                  framework
                                </li>
                                <li class="flex items-start">
                                  <span class="text-primary mr-2">•</span>
                                  Content Management System (CMS) development
                                </li>
                                <li class="flex items-start">
                                  <span class="text-primary mr-2">•</span>
                                  Database design and optimization
                                </li>
                                <li class="flex items-start">
                                  <span class="text-primary mr-2">•</span>
                                  Responsive design implementation
                                </li>
                              </ul>
                            </div>
                            <div class="flex flex-wrap gap-2 mt-4">
                              {[
                                "Laravel",
                                "PHP",
                                "PostgreSQL",
                                "HTML/CSS",
                                "JavaScript",
                                "Tailwind CSS",
                                "Node.js",
                              ].map((skill) => (
                                <span
                                  key={skill}
                                  class="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* PKL Internship */}
                        <div class="timeline-item">
                          <div class="timeline-dot bg-gradient-to-r from-accent to-primary"></div>
                          <div class="glass-card p-6 ml-6">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div>
                                <h3 class="text-xl font-bold text-accent">
                                  PKL/Vocational School Internship
                                </h3>
                                <p class="text-base-content/80 font-medium">
                                  Web PHP Developer - Dinas Penanaman Modal dan
                                  Pelayanan Terpadu Satu Pintu
                                </p>
                              </div>
                              <span class="text-sm text-base-content/60 bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                                January 2021 - June 2021
                              </span>
                            </div>
                            <p class="text-base-content/70 mb-4">
                              Create a survey information system web
                              application, as a replacement for surveys carried
                              out on Google Forms by registrants at the Office.
                              Gained hands-on experience in government sector
                              web development and user requirement analysis.
                            </p>
                            <div class="space-y-3">
                              <h4 class="font-semibold text-accent">
                                Key Achievements:
                              </h4>
                              <ul class="text-sm text-base-content/70 space-y-1 ml-4">
                                <li class="flex items-start">
                                  <span class="text-accent mr-2">•</span>
                                  Developed complete survey information system
                                  from scratch
                                </li>
                                <li class="flex items-start">
                                  <span class="text-accent mr-2">•</span>
                                  Replaced manual Google Forms process with
                                  automated web system
                                </li>
                                <li class="flex items-start">
                                  <span class="text-accent mr-2">•</span>
                                  Collaborated with government office staff for
                                  requirements gathering
                                </li>
                                <li class="flex items-start">
                                  <span class="text-accent mr-2">•</span>
                                  Improved office efficiency through digital
                                  transformation
                                </li>
                              </ul>
                            </div>
                            <div class="flex flex-wrap gap-2 mt-4">
                              {[
                                "PHP",
                                "Web Development",
                                "Survey System",
                                "Database Design",
                                "Government Sector",
                              ].map((skill) => (
                                <span
                                  key={skill}
                                  class="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Professional Growth */}
                    <div class="mt-12 text-center">
                      <div class="glass-card p-8">
                        <h3 class="text-2xl font-bold mb-6">
                          Professional Development
                        </h3>
                        <div class="grid md:grid-cols-3 gap-6">
                          <div class="space-y-3">
                            <h4 class="font-semibold text-secondary">
                              Technical Growth
                            </h4>
                            <div class="space-y-2 text-sm text-base-content/70">
                              <p>• Advanced Laravel Framework</p>
                              <p>• Modern PHP Development</p>
                              <p>• Database Optimization</p>
                              <p>• API Development</p>
                            </div>
                          </div>
                          <div class="space-y-3">
                            <h4 class="font-semibold text-accent">
                              Project Skills
                            </h4>
                            <div class="space-y-2 text-sm text-base-content/70">
                              <p>• Client Communication</p>
                              <p>• Requirement Analysis</p>
                              <p>• Project Planning</p>
                              <p>• Quality Delivery</p>
                            </div>
                          </div>
                          <div class="space-y-3">
                            <h4 class="font-semibold text-primary">
                              Industry Impact
                            </h4>
                            <div class="space-y-2 text-sm text-base-content/70">
                              <p>• Government Digitalization</p>
                              <p>• Business Process Automation</p>
                              <p>• User Experience Enhancement</p>
                              <p>• System Efficiency</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* Achievement Tab */}
              <TabPanel class="mt-10">
                <div class="max-w-4xl mx-auto">
                  <Achievement />
                </div>
              </TabPanel>

              {/* Certificate Tab */}
              <TabPanel class="mt-10">
                <div class="max-w-4xl mx-auto">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="glass-card p-6 group hover:scale-105 transition-transform duration-300">
                      <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-bold text-primary mb-2">
                            Competency Test Certificate 2022
                          </h3>
                          <p class="text-base-content/70 text-sm mb-4">
                            Achieved "Very Competent" certification
                            demonstrating excellence in software engineering
                            competencies and practical skills.
                          </p>
                          <Link
                            href="https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv"
                            target="_blank"
                            class="btn btn-outline btn-sm group-hover:btn-primary transition-colors"
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
                            View Certificate
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div class="glass-card p-6 group hover:scale-105 transition-transform duration-300">
                      <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"
                            />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <h3 class="text-lg font-bold text-secondary mb-2">
                            KKSI Certificate 2021
                          </h3>
                          <p class="text-base-content/70 text-sm mb-4">
                            Certificate from Kamp Kreatif SMK Indonesia (KKSI)
                            2021 with a "good reputation" achievement.
                          </p>
                          <Link
                            href="https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv"
                            target="_blank"
                            class="btn btn-outline btn-sm group-hover:btn-secondary transition-colors"
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
                            View Certificate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div class="mt-12 text-center">
                    <div class="glass-card p-8">
                      <h3 class="text-2xl font-bold mb-6">
                        Skills & Competencies Gained
                      </h3>
                      <div class="grid md:grid-cols-3 gap-6">
                        <div class="space-y-3">
                          <h4 class="font-semibold text-primary">
                            Technical Skills
                          </h4>
                          <div class="space-y-2 text-sm text-base-content/70">
                            <p>• Software Development Lifecycle</p>
                            <p>• Database Management</p>
                            <p>• Web Application Development</p>
                            <p>• System Analysis & Design</p>
                          </div>
                        </div>
                        <div class="space-y-3">
                          <h4 class="font-semibold text-secondary">
                            Soft Skills
                          </h4>
                          <div class="space-y-2 text-sm text-base-content/70">
                            <p>• Problem Solving</p>
                            <p>• Team Collaboration</p>
                            <p>• Project Management</p>
                            <p>• Communication</p>
                          </div>
                        </div>
                        <div class="space-y-3">
                          <h4 class="font-semibold text-accent">
                            Professional
                          </h4>
                          <div class="space-y-2 text-sm text-base-content/70">
                            <p>• Industry Best Practices</p>
                            <p>• Quality Assurance</p>
                            <p>• Documentation</p>
                            <p>• Continuous Learning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
});
