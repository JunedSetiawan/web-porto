import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="Achievement">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          {/* Timeline */}
          <div class="relative">
            {/* Timeline Line */}
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            {/* Achievement Items */}
            <div class="space-y-12">
              {/* KKSI Smart School */}
              <div class="timeline-item">
                <div class="timeline-dot bg-gradient-to-r from-primary to-secondary">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div class="glass-card p-6 ml-6">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-primary">
                        KKSI Smart School 2021
                      </h3>
                      <p class="text-base-content/80 font-medium">
                        Data Science Competition
                      </p>
                    </div>
                    <span class="text-sm text-base-content/60 bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                      2021
                    </span>
                  </div>
                  <p class="text-base-content/70">
                    Participated in the 2021 KKSI (Kamp Kreatif SMK Indonesia) Smart School competition 
                    in the Data Science field, demonstrating analytical skills and data processing capabilities.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    {["Data Science", "Analytics", "Problem Solving", "Competition"].map((skill) => (
                      <span key={skill} class="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Summary */}
          <div class="mt-12 text-center">
            <div class="glass-card p-8">
              <h3 class="text-2xl font-bold mb-6">Key Achievements</h3>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="space-y-3">
                  <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-primary">Innovation</h4>
                  <p class="text-sm text-base-content/70">
                    Demonstrated innovative thinking in data science competitions and academic projects
                  </p>
                </div>
                <div class="space-y-3">
                  <div class="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mx-auto">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-secondary">Leadership</h4>
                  <p class="text-sm text-base-content/70">
                    Active participation in team-based competitions and collaborative projects
                  </p>
                </div>
                <div class="space-y-3">
                  <div class="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mx-auto">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-accent">Performance</h4>
                  <p class="text-sm text-base-content/70">
                    Consistently achieving high standards in academic and professional pursuits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
