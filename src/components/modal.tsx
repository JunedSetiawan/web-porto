import { $, Slot, component$ } from "@builder.io/qwik";

interface ModalProps {
  id: string;
}

export default component$((props: ModalProps) => {
  const openModal = $(() => {
    const modalElement = document.getElementById(`my_modal_${props.id}`);
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal();
    }
  });
  return (
    <>
      <button onClick$={openModal}>
        <Slot name="header" />
      </button>
      <dialog id={`my_modal_${props.id}`} class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 class="font-bold text-lg mb-3 text-primary">
            <Slot name="title" />
          </h3>
          <hr class="border-2 border-primary-focus" />
          <p class="py-4">
            <Slot name="content" />
          </p>
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
