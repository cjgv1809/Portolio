import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  message: string;
  closeModal: () => void;
};

function Modal({ isOpen, message, closeModal }: Props) {
  console.log("isOpen", isOpen);
  console.log("message", message);
  console.log("closeModal", closeModal);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[rgb(36,36,36)] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-white"
                >
                  Error
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-base text-white">{message}</p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center border border-transparent bg-[#F7AB0A] py-2 px-4 rounded text-black font-bold text-base hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7AB0A] focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Accept
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
