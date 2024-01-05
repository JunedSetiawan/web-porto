import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Tab, TabList, TabPanel, Tabs } from "@qwik-ui/headless";
import Achievement from "../achievement/achievement";

export default component$(() => {
  return (
    <section id="education">
      <div class="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full mt-6 lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
        <div class="tabs-example mr-auto">
          <Tabs behavior="manual">
            <TabList class="flex justify-center space-y-4  mx-5 sm:mx-0 space-x-0 md:space-y-0 md:space-x-6 md:flex-row flex-col">
              <Tab class="font-semibold text-md shadow-xl hover:shadow-base-200 p-4">
                Education
              </Tab>
              <Tab class="font-semibold text-md shadow-xl hover:shadow-base-200 p-4">
                Achievement
              </Tab>
              <Tab class="font-semibold text-md shadow-xl hover:shadow-base-200 p-4">
                Certificate
              </Tab>
            </TabList>
            <TabPanel class="mt-10">
              <div class="flex justify-center items-center space-y-5 flex-col">
                <div class="relative px-3">
                  <ul class="steps steps-vertical lg:steps-horizontal">
                    <li data-content="●" class="step step-primary">
                      <div class="flex items-center flex-col space-y-3">
                        <h3 class="text-xl font-semibold tracki">
                          SMK Negeri 1 Jenangan Ponorogo{" "}
                        </h3>
                        <time class="text-xs tracki uppercase">
                          July 2019 - June 2022
                        </time>
                        <p>Software Engineering</p>
                      </div>
                    </li>
                    <li data-content="●" class="step step-primary">
                      <div class="flex items-center flex-col space-y-3">
                        <h3 class="text-xl font-semibold tracki">
                          Politeknik Elektronika Surabaya
                        </h3>
                        <time class="text-xs tracki uppercase">
                          August 2022 - Now
                        </time>
                        <p class="mt-3">
                          Associate Degree Informatics Engineering
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <TabPanel class="mt-10">
              <Achievement />
            </TabPanel>
            <TabPanel class="mt-10">
              <div class="flex justify-center items-center space-y-5 flex-col">
                <div class="relative px-3">
                  <ul class="menu bg-base-100 w-96 rounded-box space-y-3">
                    <li class="shadow-md">
                      <Link
                        href="https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv"
                        target="_blank"
                        class="flex flex-col"
                      >
                        <h1 class="text-lg font-semibold text-primary">
                          Competency Test Certificate 2022
                        </h1>
                        <p>with the title "Very Competent"</p>
                      </Link>
                    </li>
                    <li class="shadow-md">
                      <Link
                        href="https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv"
                        target="_blank"
                        class="flex flex-col"
                      >
                        <h1 class="text-lg font-semibold text-primary text-center">
                          Certificate Kegiatan Kamp Kreatif SMK Indonesia (KKSI)
                          2021
                        </h1>
                        <p>with a "good reputation"</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
});
