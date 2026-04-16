
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Fragment } from 'react'

//Tipamos los props de modal
type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>

                {/* Backdrop */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </TransitionChild>

                {/* Contenido */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl p-6 shadow-xl">

                            <div className="flex justify-between items-center">
                                <button
                                    onClick={onClose}
                                    className="flex items-center justify-center w-8 h-8 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition ml-auto cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Contenido dinámico */}
                            {children}

                        </DialogPanel>
                    </TransitionChild>
                </div>

            </Dialog>
        </Transition>
    )
}