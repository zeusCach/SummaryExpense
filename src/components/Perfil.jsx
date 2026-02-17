import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default function Perfil() {

    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState("Zeus Cach")

    return (
        <>

            <div>
                <button
                    onClick={() => setIsOpen(true)}
                    className='h-12 w-12 bg-orange-50 rounded-full cursor-pointer'
                >
                    {
                        userName.split(' ').map(n => n[0]).join("")
                    }
                </button>
            </div>
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className='fixed inset-0 bg-black/60 backdrop-blur-md z-50' />
                    <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md z-50'>

                        {/* header */}
                        <div className="text-center mb-8">
                            <Dialog.Title className="text-3xl font-bold text-slate-800 mb-2">
                                Editar Perfil
                            </Dialog.Title>
                            <Dialog.Description className="text-slate-500">
                                Actualiza tu nombre
                            </Dialog.Description>
                        </div>

                        {/* section del perfil*/}
                        <div className="">

                        </div>

                        {/* section del nombre */}
                        <div className="mb-8">
                            <label className='block text-sm font-semibold text-slate-700 mb-3'>Nombre completo</label>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className='w-full py-4 px-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-green-500 focus:bg-white transition-all font-bold text-slate-800 text-lg'
                            />

                        </div>

                        {/* Section de los botones */}
                        <div className="flex gap-3">
                            <Dialog.Close className='bg-red-400 py-2 px-2 rounded-xl text-white text-lg font-bold cursor-pointer'>
                                Cancelar
                            </Dialog.Close>
                            <button
                                className='bg-green-500 py-2 px-2 rounded-xl text-white text-lg font-bold cursor-pointer'
                                onClick={() => setIsOpen(false)}
                            >
                                Guardar
                            </button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root >
        </>
    );
}