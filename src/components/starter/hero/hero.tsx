import ImgProfile from "~/media/profile.png?jsx";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex items-center justify-between lg:flex-row flex-col-reverse">
        <div class="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              I'M{" "}
              <span class="text-primary-focus font-mono">Juned Setiawan S</span>
            </h2>
            <p class="text-base md:text-xl font-semibold">
              Web Developer & Web Development Enthusiast
            </p>
          </div>
          <div class="flex flex-col items-center md:flex-row">
            <button class="btn btn-outline btn-warning border-2">
              Contact Me
            </button>
          </div>
        </div>
        <div class="relative lg:w-1/2 lg:my-0 my-5">
          <ImgProfile
            class="w-full h-64 rounded-2xl sm:object-contain shadow-sm sm:h-96"
            alt="Juned Setiawan S"
          />
        </div>
      </div>
    </div>
  );
});
