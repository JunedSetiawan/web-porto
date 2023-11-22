import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="portfolio">
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center capitalize lg:text-3xl">
            Portfolio
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-80"
              style="background-image:url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-wrap-port">
                <h2 class="mt-4 text-xl font-semibold capitalize">
                  Best website collections
                </h2>
              </div>
            </div>

            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-80"
              style="background-image:url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-wrap-port">
                <h2 class="mt-4 text-xl font-semibold capitalize">
                  Block of Ui kit collections
                </h2>
              </div>
            </div>

            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-80"
              style="background-image:url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-wrap-port">
                <h2 class="mt-4 text-xl font-semibold capitalize">
                  Ton’s of mobile mockup
                </h2>
              </div>
            </div>

            <div
              class="flex items-end overflow-hidden bg-cover rounded-lg h-80"
              style="background-image:url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
            >
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-wrap-port">
                <h2 class="mt-4 text-xl font-semibold capitalize">
                  Huge collection of animation
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
