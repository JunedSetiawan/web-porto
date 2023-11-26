import { component$ } from "@builder.io/qwik";
import Achievement from "../achievement/achievement";

export default component$(() => {
  return (
    <section id="education">
      <div class="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full mt-6 lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
        <div class="grid gap-20 sm:gap-4 sm:grid-cols-2">
          <div>
            <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary-focus">
              <h3 class="text-3xl font-semibold">Education</h3>
            </div>
            <div class="relative px-4 space-y-6">
              <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-neutral-content">
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-focus">
                  <h3 class="text-xl font-semibold tracki">
                    SMK Negeri 1 Jenangan Ponorogo{" "}
                  </h3>
                  <time class="text-xs tracki uppercase">
                    July 2019 - June 2022
                  </time>
                  <p class="mt-3">Software Engineering</p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-focus">
                  <h3 class="text-xl font-semibold tracki">
                    Politeknik Elektronika Surabaya
                  </h3>
                  <time class="text-xs tracki uppercase">
                    August 2022 - Now
                  </time>
                  <p class="mt-3">Associate Degree Informatics Engineering</p>
                </div>
              </div>
            </div>
          </div>
          <Achievement />
        </div>
      </div>
    </section>
  );
});
