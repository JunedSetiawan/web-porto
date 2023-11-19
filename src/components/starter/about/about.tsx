import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="about">
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
        <h3 class="text-3xl font-semibold mb-4">About</h3>
        <div class="flex">
          <hr class="border-primary border-2 w-36 mt-3" />
          <div class="ml-3">
            <p class="font-medium">
              Fresh Graduate with Intermediate Skilled Laravel Developer with a
              background in web application development and a passion for
              creating efficient and innovative solutions. Experienced in
              designing databases. Ability to work collaboratively in a team and
              deliver high quality code. Committed to continuously learning and
              staying up-to-date with the latest technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
