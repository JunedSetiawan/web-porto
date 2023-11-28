import { component$ } from "@builder.io/qwik";
import Modal from "~/components/modal";
import Zeralight from "~/media/pr-image/zeralight.png?jsx";
import Zeradark from "~/media/pr-image/zeradark.png?jsx";
import Zeralogin from "~/media/pr-image/Zeralogin.png?jsx";
import Zeraprofile from "~/media/pr-image/zeraprofile.png?jsx";
import Zerafitur from "~/media/pr-image/zerafitur.png?jsx";
import Dashsurvei from "~/media/pr-image/dashsurvei.png?jsx";

export default component$(() => {
  return (
    <section id="portfolio">
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center capitalize lg:text-3xl">
            Portfolio
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div>
              <Zeralight
                class="b-cover object-cover w-full rounded-lg h-64"
                alt=""
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="1">
                  <div q:slot="header">Starter Template Dashboard Laravel</div>
                  <span q:slot="title">Zera Dashboard Laravel</span>
                  <span q:slot="content">
                    <span class="font-normal text-md my-2">
                      <span>
                        - The Open Source Starter Template Dashboard for Laravel
                        uses the splade package and the Daisy UI Component. This
                        template has several components and an attractive
                        dashboard design with several helpers to make it easier
                        to develop applications and documentation to make it
                        easier to use with the help of my colleagues.
                      </span>
                      <br />
                      <span class="text-center flex justify-center font-semibold my-4">
                        Screenshoot
                      </span>
                      <span class="grid grid-cols-1 gap-6 place-items-center">
                        login
                        <Zeralogin />
                        light mode
                        <Zeralight />
                        dark mode
                        <Zeradark />
                        profile
                        <Zeraprofile />
                        component & helper
                        <Zerafitur />
                      </span>
                    </span>
                  </span>
                </Modal>
              </h2>
            </div>
            <div>
              <Dashsurvei
                class="b-cover object-cover w-full rounded-lg h-64"
                alt=""
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="2">
                  <div q:slot="header">Information System Survei</div>
                  <span q:slot="title">Information System Survei</span>
                  <span q:slot="content">hello</span>
                </Modal>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
