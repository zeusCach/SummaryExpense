import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import { Edit, Edit3, EditIcon } from "lucide-react";
import EditButton from "../components/EditButton";


export default function Configuration(setIsEdit) {
    const {userName, setUserName} = useContext(UserContext);
    const [isEdit, setIsEdit] = useState(false);

    function handleEdit(){
       setIsEdit(true)
    }
    
    function handleChangeEdit(e){
        const {value} = e.target
        setUserName(value)
    }

    return (
    <>
    <div className="container mx-auto max-w-4xl px-5 py-10">
        <h1 className="text-2xl text-white font-semibold ">Configuracion</h1>
        <p className="text-lg text-slate-300 pb-10">Administra tu cuenta</p>

        <div className=" bg-white/5 rounded-lg p-8"> 
            <h2 className="text-white font-normal text-2xl ml-1">
                Informacion de tu cuenta
            </h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-8 gap-6">
            <div className="flex items-center justify-between px-2 py-2">
                    <div className="flex flex-col">
                        <label className="text-white font-medium text-lg">
                            Usuario
                        </label>
                        {
                            isEdit ? (
                                <div className="flex-1 flex gap-4">
                                    <input 
                                    type="text" 
                                    value={userName} 
                                    onChange={handleChangeEdit}
                                    className="px-2 py-2 rounded-lg text-white border-2 border-green-400"
                                     />
                                     <EditButton/>
                                </div>
                               
                            ) : (
                                <p className="text-lg font-semibold text-slate-300">
                                    {userName}
                                 </p>
                            )
                        }
                        
             </div>
            
            {
                !isEdit ? (
                    <Edit 
                        onClick={handleEdit} 
                        className="text-white cursor-pointer"
                    />
                ) : (
                    <p></p>
                )
            }
                   
            </div>
            <div className="px-2 py-2">
                    <label className="text-white font-medium text-lg">
                        Correo electronico
                    </label>
                    <p className="text-lg font-semibold text-slate-300">
                        zeus.cach@outlook.com
                    </p>
            </div>
        </div>

            
        </div>
    </div>
    

    </>
    )
}