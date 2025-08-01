import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section id="contact" class="relative py-0 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/4 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div class="section-padding">
        <div class="max-w-6xl mx-auto">
          {/* Section Header */}
          <div class="text-center mb-16">
            <div class="inline-block mb-4">
              <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                Get In Touch
              </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Let's Work{" "}
              <span class="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss
              new projects and opportunities. Let's create something amazing
              together.
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
          </div>

          <div class="grid lg:grid-cols-1 gap-16 items-start justify-center">
            {/* Contact Information */}
            <div class="space-y-8 max-w-4xl mx-auto">
              {/* Direct Contact Cards */}
              <div class="space-y-4">
                <h3 class="text-2xl font-bold mb-6 flex items-center">
                  <div class="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded-full mr-4"></div>
                  Contact Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
                  {/* Email Card */}
                  <Link
                    href="mailto:junedhayko502@gmail.com"
                    class="block glass-effect rounded-xl p-6 backdrop-blur-sm bg-base-100/50 border border-base-300/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div class="flex items-center space-x-4">
                      <div class="w-12 h-12 p-3 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-base-content group-hover:text-primary transition-colors duration-300">
                          Email Address
                        </h4>
                        <p class="text-base-content/70">
                          junedhayko502@gmail.com
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Phone Card */}
                  <Link
                    href="https://wa.me/082365265904"
                    target="_blank"
                    class="block glass-effect rounded-xl p-6 backdrop-blur-sm bg-base-100/50 border border-base-300/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div class="flex items-center space-x-4">
                      <div class="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-base-content group-hover:text-secondary transition-colors duration-300">
                          WhatsApp
                        </h4>
                        <p class="text-base-content/70">+62 823-6526-5904</p>
                      </div>
                    </div>
                  </Link>

                  {/* Location Card */}
                  <div class="glass-effect rounded-xl p-6 backdrop-blur-sm bg-base-100/50 border border-base-300/50">
                    <div class="flex items-center space-x-4">
                      <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-base-content">
                          Location
                        </h4>
                        <p class="text-base-content/70">Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div class="glass-effect rounded-2xl p-8 backdrop-blur-sm bg-base-100/50 border border-base-300/50">
                <h3 class="text-xl font-bold mb-6">Connect With Me</h3>
                <div class="flex flex-wrap gap-4">
                  <Link
                    href="https://github.com/JunedSetiawan"
                    target="_blank"
                    class="btn btn-outline btn-sm rounded-lg flex items-center gap-2 hover:btn-primary transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Link>

                  <Link
                    href="https://linkedin.com/in/junedsetiawan502"
                    target="_blank"
                    class="btn btn-outline btn-sm rounded-lg flex items-center gap-2 hover:btn-primary transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>

                  <Link
                    href="https://facebook.com/jun.hayko"
                    target="_blank"
                    class="btn btn-outline btn-sm rounded-lg flex items-center gap-2 hover:btn-primary transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div class="text-center mt-16">
            <div class="glass-effect rounded-2xl p-8 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p class="text-base-content/70 mb-6">
                Let's discuss your ideas and turn them into reality. I'm here to
                help you build something extraordinary.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/CV_ATS.pdf"
                  target="_blank"
                  class="btn btn-outline btn-lg rounded-full px-8"
                >
                  Download CV
                </Link>
                <Link
                  href="https://wa.me/082365265904"
                  target="_blank"
                  class="btn btn-primary btn-lg rounded-full px-8"
                >
                  Start Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
