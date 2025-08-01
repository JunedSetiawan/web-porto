import ImgProfile from "~/media/profile.png?jsx";
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section
      id="hero"
      class="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decorations */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div class="section-padding w-full">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div class="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div class="space-y-4">
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                  Available for work
                </div>

                <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span class="gradient-text block">Juned Setiawan</span>
                </h1>

                <div class="space-y-2">
                  <p class="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-content/80">
                    Laravel Web Developer
                  </p>
                  <p class="text-lg text-base-content/60">
                    Full-Stack Developer & Web Development Enthusiast <br />{" "}
                    Passionate about creating efficient and innovative web
                    solutions with expertise in Laravel, modern web
                    technologies, and user-centered design principles.
                  </p>
                </div>
              </div>

              <p class="text-lg text-base-content/70 max-w-2xl text-balance"></p>

              <div class="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Link
                  href="#contact"
                  class="btn btn-primary btn-lg group relative overflow-hidden"
                >
                  <span class="relative z-10">Get In Touch</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="#portfolio"
                  class="btn btn-outline btn-lg hover:btn-primary"
                >
                  View My Work
                </Link>

                <Link
                  href="/CV_ATS.pdf"
                  target="_blank"
                  class="btn btn-ghost btn-lg group"
                >
                  <svg
                    class="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </Link>
              </div>

              {/* Social Links */}
              <div class="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                <Link
                  href="https://github.com/JunedSetiawan"
                  target="_blank"
                  class="text-base-content/60 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/juned-setiawan"
                  target="_blank"
                  class="text-base-content/60 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div class="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div class="relative group">
                {/* Background decoration */}
                <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div class="absolute inset-0 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-3xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>

                {/* Main image */}
                <div class="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                  <ImgProfile
                    class="w-64 h-80 sm:w-72 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    alt="Juned Setiawan S - Laravel Web Developer"
                  />

                  {/* Overlay gradient */}
                  <div class="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating elements */}
                <div class="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-bounce animation-delay-2000"></div>
                <div class="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary/20 rounded-full animate-bounce animation-delay-4000"></div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-base-content/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
