import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "~/routes/index";

export default component$(() => {
  // const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="mt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:mt-16">
        <div class="container text-xl md:text-3xl font-semibold text-center rounded font-mono">
          `Created by <span class="text-primary-focus">Lazy Programmer`</span>
        </div>
      </div>
    </footer>
  );
});
