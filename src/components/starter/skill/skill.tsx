import { component$ } from "@builder.io/qwik";
import Prisma from "~/media/prisma.svg?jsx";
import Html from "~/media/html.svg?jsx";
import Css from "~/media/css.svg?jsx";
import Bootstrap from "~/media/bootstrap.svg?jsx";
import Expressjs from "~/media/expressjs.svg?jsx";
import Fastify from "~/media/fastify.svg?jsx";
import Git from "~/media/git.svg?jsx";
import Javascript from "~/media/javascript.svg?jsx";
import Jquery from "~/media/jquery.svg?jsx";
import Laravel from "~/media/laravel.svg?jsx";
import Livewire from "~/media/livewire.svg?jsx";
import Mysql from "~/media/mysql.svg?jsx";
import Nodejs from "~/media/nodejs.svg?jsx";
import Reactjs from "~/media/reactjs.svg?jsx";
import Tailwindcss from "~/media/tailwindcss.svg?jsx";

export default component$(() => {
  return (
    <section id="skill">
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
        <h2 class="text-3xl font-semibold text-center mt-5">My Skills</h2>
        <div class="grid grid-cols-2 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-4">
          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Html class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Html</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Css class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Css</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Javascript class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Javascript</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Jquery class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Jquery</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Bootstrap class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Bootstrap</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Tailwindcss
              class="object-cover w-18 h-18 sm:w-24 sm:h-24"
              alt=""
            />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Tailwindcss</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Git class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Git</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Laravel class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Laravel</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Livewire class="object-cover w-16 h-16 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Livewire</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Nodejs class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Nodejs</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Reactjs class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Reactjs</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Expressjs class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Expressjs</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Fastify class="object-cover w-16 h-16 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Fastify</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Prisma class="object-cover w-16 h-16 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Prisma</h1>
          </div>

          <div class="skill-content shadow-lg flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary-focus">
            <Mysql class="object-cover w-18 h-18 sm:w-24 sm:h-24" alt="" />

            <h1 class="mt-4 text-xl font-semibold capitalize ">Mysql</h1>
          </div>
        </div>
      </div>
    </section>
  );
});
