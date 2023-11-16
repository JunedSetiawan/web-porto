import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ThemeToggle } from "~/components/theme-toggle";

export default component$(() => {
	return (
		<header class="mx-14 py-4">
			<div class="navbar bg-base-100 text-base-content">
				<div class="navbar-start">
					<div class="dropdown">
						<label tabIndex={0} class="btn btn-ghost btn-circle">
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
						</label>
					</div>
				</div>
				<div class="navbar-center">
					<Link href="/" class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus mx-1.5 sm:mx-6">
						About
						</Link>
					<Link href="/" class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus mx-1.5 sm:mx-6">
						Portfolio
						</Link>
					<Link href="/" class="font-semibold border-b-2 border-transparent transition-colors duration-300 transform hover:border-primary-focus mx-1.5 sm:mx-6">
						Contact
						</Link>
				</div>
				<div class="navbar-end">
				<ThemeToggle />
				</div>
			</div>
		</header>
	);
});
