import { useContext, useState } from "react";
import EditButton from "../EditButton";
import { UserContext } from "../../context/userContext";
import { ArrowLeftCircle, Edit } from "lucide-react";
import { Link } from "react-router-dom";

export default function Account() {
    const { userName, setUserName } = useContext(UserContext);
    const [isEdit, setIsEdit] = useState(false);

    function handleEdit() {
        setIsEdit(true)
    }

    function handleChangeEdit(e) {
        const { value } = e.target
        setUserName(value)
    }

    return (
        <>

            <div className="flex justify-between">
                <div className="">
                    <h1 className="text-2xl text-white font-semibold ">Configuracion</h1>
                    <p className="text-lg text-slate-300 pb-10">Administra tu cuenta</p>
                </div>

                <Link to="/">
                    <span className="flex items-center gap-2 text-white hover:text-green-400">
                        <ArrowLeftCircle />
                        Ir al dashboard
                    </span>
                </Link>

            </div>

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
                                    <>
                                        <div className="flex-1 flex gap-4">
                                            <input
                                                type="text"
                                                value={userName}
                                                onChange={handleChangeEdit}
                                                className="px-2 py-2 rounded-lg text-white border-2 border-green-400"
                                            />
                                            <div className="hidden md:block">
                                                <EditButton />
                                            </div>
                                        </div>
                                        <div className="block md:hidden py-5">
                                            <EditButton />
                                        </div>
                                    </>
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
        </>
    )
}