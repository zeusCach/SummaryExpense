import EditButton from "../EditButton";
import { ArrowLeftCircle, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { USER_TYPE } from "../../reducer/userReducer";
import { useEffect, useState } from "react";

export default function Account() {

    //
    const { state, dispatch } = useUser();
    const [editUser, setEditUser] = useState(false);
    const [user, setUser] = useState({ userName: '' });

    function handleEdit() {
        dispatch({
            type: USER_TYPE.UPDATE,
            payload: { user: user.userName }
        })

        setEditUser(false)
    }

    function handleChange(e) {
        const { name, value } = e.target

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const isEdit = () => {
        setEditUser(true)
    }
    return (
        <>

            <div className="flex justify-between">
                <div className="">
                    <h1 className="text-2xl text-white font-semibold ">Configuracion</h1>
                    <p className="text-lg text-slate-300 pb-10">Administra tu cuenta</p>
                </div>

                <Link to="/dashboard">
                    <span className="flex items-center gap-2 text-white hover:text-gray-400">
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
                            <label className="text-white font-medium text-lg ">
                                Usuario
                            </label>
                            {


                                editUser ? (
                                    <>
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <input
                                                type="text"
                                                name="userName"
                                                value={user.userName}
                                                onChange={handleChange}
                                                className="px-2 py-2 rounded-lg text-white border-2 border-green-400"
                                            />

                                            <EditButton
                                                onSave={handleEdit}
                                                onCancel={() => setEditUser(false)}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-lg font-semibold text-slate-300">
                                        {state.user}
                                    </p>
                                )


                            }

                        </div>

                        {
                            !editUser && (
                                <Edit
                                    onClick={isEdit}
                                    className="text-white cursor-pointer"
                                />)

                        }

                    </div>
                    <div className="px-2 py-2">
                        <label className="text-white font-medium text-lg">
                            Correo electronico
                        </label>
                        <p className="text-lg font-semibold text-slate-300">
                            proximamente@algo.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}