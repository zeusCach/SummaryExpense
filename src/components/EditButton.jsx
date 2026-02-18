import { useState } from "react";


export default function EditButton(setIsEdit) {
    return(
        <>
        <div className="flex items-center gap-2">
            <button 
               
                className="px-2 py-2 bg-green-500  text-white font-medium rounded-xl cursor-pointer "
            >
                Guardar
            </button>

            <button 
                
                className="px-2 py-2 bg-red-400 text-white font-medium rounded-xl cursor-pointer"
            >
                Cancelar
            </button>
        </div>
        </>
    )
}