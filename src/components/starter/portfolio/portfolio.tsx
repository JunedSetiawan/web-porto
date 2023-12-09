import { component$ } from "@builder.io/qwik";
import Modal from "~/components/modal";
import Zeralight from "~/media/pr-image/zeralight.png?jsx";
import Zeradark from "~/media/pr-image/zeradark.png?jsx";
import Zeralogin from "~/media/pr-image/zeralogin.png?jsx";
import Zeraprofile from "~/media/pr-image/zeraprofile.png?jsx";
import Zerafitur from "~/media/pr-image/zerafitur.png?jsx";
import Dashsurvei from "~/media/pr-image/dashsurvei.png?jsx";
import LoginSurvei from "~/media/pr-image/loginsurvei.png?jsx";
import FormSurvei from "~/media/pr-image/formsurvei.png?jsx";
import FiturSurvei from "~/media/pr-image/fitursurvei.png?jsx";
import FiturSurvei2 from "~/media/pr-image/fitur2survei.png?jsx";
import FiturSurvei3 from "~/media/pr-image/fitur3survei.png?jsx";

export default component$(() => {
  return (
    <section id="portfolio">
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16 mb-4 md:mb-10">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center capitalize lg:text-3xl">
            Portfolio
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div>
              <Zeralight
                loading="lazy"
                class="b-cover object-cover w-full rounded-lg h-64 shadow"
                alt=""
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="1">
                  <div q:slot="header">Starter Template Dashboard Laravel</div>
                  <span q:slot="title">Zera Dashboard Laravel</span>
                  <span q:slot="content">
                    <span class="font-normal text-md my-2">
                      <span>
                        The Open Source Starter Template Dashboard for Laravel
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
                        <Zeralogin loading="lazy" />
                        light mode
                        <Zeralight loading="lazy" />
                        dark mode
                        <Zeradark loading="lazy" />
                        profile
                        <Zeraprofile loading="lazy" />
                        component & helper
                        <Zerafitur loading="lazy" />
                      </span>
                    </span>
                  </span>
                </Modal>
              </h2>
            </div>
            <div>
              <Dashsurvei
                class="b-cover object-cover w-full rounded-lg h-64 shadow"
                alt=""
                loading="lazy"
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="2">
                  <div q:slot="header">Information System Survei</div>
                  <span q:slot="title">Information System Survei</span>
                  <span q:slot="content">
                    This information system is to facilitate the management of
                    surveys that have been filled in by applicants who go to the
                    investment office, who previously used the Google form to
                    fill out surveys.In this information system there are
                    filters to handle surveys in the form of date ranges,
                    checkboxes for answers from applicants, etc. and also has an
                    export feature for daily or weekly reports.
                    <br />
                    <span class="text-center flex justify-center font-semibold my-4">
                      Screenshoot
                    </span>
                    <span class="grid grid-cols-1 gap-6 place-items-center">
                      Form Survei
                      <FormSurvei loading="lazy" />
                      Login Page
                      <LoginSurvei loading="lazy" />
                      Dashboard Page
                      <Dashsurvei loading="lazy" />
                      User Management
                      <FiturSurvei loading="lazy" />
                      Summary Count Survei Page
                      <FiturSurvei2 loading="lazy" />
                      Report Filter Page
                      <FiturSurvei3 loading="lazy" />
                    </span>
                  </span>
                </Modal>
              </h2>
            </div>
            <div>
              <Dashsurvei
                class="b-cover object-cover w-full rounded-lg h-64 shadow"
                alt=""
                loading="lazy"
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="3">
                  <div q:slot="header">Simple Ecommerce</div>
                  <span q:slot="title">Simple Ecommerce (Coming Soon)</span>
                  <span q:slot="content">
                    Coming Soon ?
                    <br />
                  </span>
                </Modal>
              </h2>
            </div>
            <div>
              <Dashsurvei
                class="b-cover object-cover w-full rounded-lg h-64 shadow"
                alt=""
                loading="lazy"
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="4">
                  <div q:slot="header">Blog News Splade</div>
                  <span q:slot="title">Blog News Splade (WIP)</span>
                  <span q:slot="content">
                    WIP
                    <br />
                  </span>
                </Modal>
              </h2>
            </div>
            <div>
              <Dashsurvei
                class="b-cover object-cover w-full rounded-lg h-64 shadow"
                alt=""
                loading="lazy"
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="5">
                  <div q:slot="header">Web Automation</div>
                  <span q:slot="title">Web Automation (Coming Soon)</span>
                  <span q:slot="content">
                    Coming Soon ?
                    <br />
                  </span>
                </Modal>
              </h2>
            </div>
            <div>
              <Dashsurvei
                class="b-cover object-cover w-full rounded-lg h-64 shadow"
                alt=""
                loading="lazy"
              />
              <h2 class="mt-4 text-xl font-semibold">
                <Modal id="6">
                  <div q:slot="header">Prewire Starter Template</div>
                  <span q:slot="title">
                    Prewire Starter Template (Coming Soon)
                  </span>
                  <span q:slot="content">
                    Coming Soon ?
                    <br />
                  </span>
                </Modal>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
