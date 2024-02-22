import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import GlobalStyle from "./global.css?inline";

export default component$(() => {
  useStyles$(GlobalStyle);
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body class="inset-0 h-full w-full bg-base-100 bg-[radial-gradient(#555555_1px,transparent_1px)] [background-size:16px_16px]">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
