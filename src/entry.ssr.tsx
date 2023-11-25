/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  // here we access the server data
  const { serverData } = opts;
  // create a variable to be used to create a class based on the cookie value
  let themeClass;

  // if the theme cookie exists, we get its value and set the themeClass variable
  if (
    (serverData as any).qwikcity?.ev?.cookie?.get("theme")?.value !== undefined
  ) {
    themeClass = (serverData as any).qwikcity.ev.cookie.get("theme").value;
  } else {
    // if it does not exist we set a default theme, I am choosing light here
    themeClass = "halloween";
  }

  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      class: "scroll-smooth",
      "data-theme": `${themeClass}`,
      ...opts.containerAttributes,
    },
  });
}
