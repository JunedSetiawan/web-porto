import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ThemeToggle } from "~/components/theme-toggle";

export default component$(() => {
  return (
    <header>
      <div class="navbar bg-base-100 text-base-content">
        <div class="navbar-start">
          <details class="dropdown sm:hidden">
            <summary class="m-1 btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </summary>
            <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <Link
                  href="#about"
                  class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </details>
          <div class="hidden sm:flex">
            <Link
              href="#about"
              class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus mx-1.5 sm:mx-6"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus mx-1.5 sm:mx-6"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus mx-1.5 sm:mx-6"
            >
              Contact
            </Link>
          </div>
        </div>
        <div class="navbar-center"></div>
        <div class="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});
