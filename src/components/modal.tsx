import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      {/* <button class="btn" onClick$="my_modal_4.showModal()">
        open modal
      </button> */}
      <dialog id="my_modal_4" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
});
