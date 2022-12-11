import { Fragment, useRef, useState, Dispatch } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IProject } from "../../types";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  setOpen: Dispatch<boolean>;
  open: boolean;
  selectedImage: any | null;
}

export default function Example({ open, setOpen, selectedImage }: IProps) {
  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[9999]"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="p-6">
                <div className="relative  bg-primary-light-blue text-white rounded-lg">
                  <div className="flex items-center justify-center group rounded-full bg-primary-dark-blue w-10 h-10 absolute top-2 right-2">
                    <AiOutlineClose
                      onClick={handleClose}
                      className="text-2xl  group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out cursor-pointer"
                    />
                  </div>
                  <img
                    src={selectedImage}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
