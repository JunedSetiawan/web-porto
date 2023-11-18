import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";
import Hero from "~/components/starter/hero/hero";

export const onGet: RequestHandler = async ({ cacheControl, cookie }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });

  if (cookie.get("theme") === null) {
    cookie.set("theme", "halloween", {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      maxAge: 2592000,
    }); // maxAge is 30 days, you use any period of time you want
  }
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <div class="lg:mx-14 py-3 sm:mx-6">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Juned Setiawan S - Web Developer",
  meta: [
    {
      name: "description",
      content: "Juned Setiawan Suyadi - Web Development Enthusiast",
    },
    {
      name: "title",
      content: "Juned Setiawan Suyadi",
    },
    {
      name: "keywords",
      content:
        "Juned Setiawan, Juned Setiawan Suyadi, Web Development, Web developer, Backend Developer, Laravel Developer, Web App Developer.",
    },
    {
      name: "author",
      content: "Juned Setiawan Suyadi",
    },
  ],
};
