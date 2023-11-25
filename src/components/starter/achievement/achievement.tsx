import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="Achievement">
      <div class="mb-8 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary-focus sm:before:right-20 sm:before:absolute"></div>
      <h3 class=" mb-16 text-3xl font-semibold text-center sm:text-right">
        Achievement
      </h3>
      <div class="relative px-4 space-y-6">
        <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-right-3 before:bg-neutral-content sm:text-right">
          <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:right-[-35px] sm:before:z-[1] before:bg-primary-focus">
            <h3 class="text-xl font-semibold tracki">KKSI Smart School </h3>
            <time class="text-xs tracki uppercase">2021</time>
            <p class="mt-3">
              Participating in the 2021 KKSI Smart School field Competition in
              the Data Science field
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
