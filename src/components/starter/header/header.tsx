import { component$, useSignal, $ } from "@builder.io/qwik";
import { ThemeToggle } from "~/components/theme-toggle";

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  const closeMenu = $(() => {
    isMenuOpen.value = false;
  });

  return (
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div class="flex items-center">
            <a href="#hero" class="text-xl font-bold gradient-text">
              Jun.dev
            </a>
          </div>

          {/* Navigation */}
          <nav class="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#education"
              class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
            >
              Education
            </a>
            <a
              href="#skill"
              class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              class="text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div class="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              class="md:hidden p-2 rounded-lg hover:bg-base-200 transition-colors"
              onClick$={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen.value ? (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        class={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen.value ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-base-100 border-t border-base-300/50`}
      >
        <div class="px-4 py-2 space-y-1">
          <a
            href="#about"
            class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
            onClick$={closeMenu}
          >
            About
          </a>
          <a
            href="#education"
            class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
            onClick$={closeMenu}
          >
            Education
          </a>
          <a
            href="#skill"
            class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
            onClick$={closeMenu}
          >
            Skills
          </a>
          <a
            href="#portfolio"
            class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
            onClick$={closeMenu}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            class="block px-3 py-2 text-base-content/70 hover:text-primary hover:bg-base-200 rounded-lg transition-colors"
            onClick$={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
});
