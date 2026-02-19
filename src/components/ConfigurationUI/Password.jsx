import { Edit } from "lucide-react";

export default function Password() {
    return (
        <>
            <div className="space-y-4 pt-5">
                <div className=" bg-white/5 rounded-lg p-8">
                    <h2 className="text-white font-normal text-2xl ml-1">
                        Modifica tu contraseña
                    </h2>
                    <div className="container grid grid-cols-1 md:grid-cols-2 py-8 gap-6">
                        <div className="flex items-center justify-between px-2 py-2">
                            <div className="flex flex-col">
                                <label className="text-white font-medium text-lg">
                                    Contraseña
                                </label>
                                <div className="flex-1 flex gap-4">
                                    <p className="text-lg font-semibold text-slate-300">
                                        ***********
                                    </p>
                                </div>
                            </div>
                            <Edit className="text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}