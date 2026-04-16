import { useState } from "react"
import Modal from "../ui/Modal"
import { CircleAlertIcon } from "lucide-react";

export default function Danger() {

    //hook que controla la accion del modal
    const [isOpen, setIsOpen] = useState(false);

    //handle que se encarga de limpiar el localstorage y redireccion al home
    const handleDelete = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <div className="pt-5">
            <div className="bg-white/5 border border-red-500/20 rounded-2xl p-8">

                <div className="mb-8">
                    <h2 className="text-red-400 text-2xl font-semibold">Zona de riesgo</h2>
                    <p className="text-slate-400 text-sm mt-1">Acciones irreversibles sobre tu cuenta</p>
                </div>

                <div className="p-2 flex flex-col gap-3">

                    <button
                        onClick={() => setIsOpen(true)}
                        className="self-start px-4 py-2 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500 text-red-400 font-medium rounded-lg transition-all cursor-pointer">
                        Eliminar cuenta
                    </button>

                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >

                        <div className="flex flex-col gap-4">

                            <div className="flex justify-center ">
                                <CircleAlertIcon size={50} className="text-red-400" />
                            </div>
                            <div className="text-center space-y-2">
                                <p className="text-white text-xl font-semibold">
                                    ¿Estas seguro que quieres eliminar tu cuenta?
                                </p>
                                <p className="text-white/50 text-sm">
                                    Esta acción es irreversible
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 hover:bg-white/5 transition cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button onClick={handleDelete} className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition
                                cursor-pointer
                                "
                                >
                                    Eliminar
                                </button>
                            </div>

                        </div>

                    </Modal>

                    <p className="text-sm text-slate-500">
                        Al eliminar tu cuenta perderás toda tu información de forma permanente. <span className="font-bold">La página se actualizará automáticamente.</span>
                    </p>
                </div>

            </div>
        </div>
    )
}