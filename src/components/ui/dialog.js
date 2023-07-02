'use client';

import { Dialog as DialogPrimitive, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Dialog({ open, onClose, title, description, children }) {
  return (
    <Transition show={open} as={Fragment}>
      <DialogPrimitive as="div" onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPrimitive.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogPrimitive.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {title}
                </DialogPrimitive.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </div>

                <div className="mt-4">{children}</div>
              </DialogPrimitive.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogPrimitive>
    </Transition>
  );
}
