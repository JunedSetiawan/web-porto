import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="Achievement">
      <div class="flex justify-center items-center space-y-5 flex-col">
        <div class="relative px-3">
          <ul class="steps steps-horizontal">
            <li data-content="★" class="step step-primary">
              <div class="flex items-center flex-col space-y-3">
                <h3 class="text-xl font-semibold tracki">KKSI Smart School</h3>
                <time class="text-xs tracki uppercase">2021</time>
                <p>
                  Participating in the 2021 KKSI Smart School field Competition
                  in the Data Science field
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
