import { component$ } from "@builder.io/qwik";
import { ThemeToggle } from "~/components/theme-toggle";

export default component$(() => {
  return (
    <header>
      <div class="flex justify-center items-center min-h-16 w-full pt-10 bg-base-100 text-base-content">
        <ThemeToggle />
      </div>
    </header>
  );
});
