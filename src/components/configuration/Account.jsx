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
        <div className="pt-5">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="mb-8">
                    <h2 className="text-white text-2xl font-semibold">Información de tu cuenta</h2>
                    <p className="text-slate-400 text-sm mt-1">Tus datos personales</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Usuario */}
                    <div className="flex items-center justify-between p-2">
                        <div className="flex flex-col gap-3 flex-1">
                            <label className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                                Usuario
                            </label>

                            {editUser ? (
                                <div className="flex flex-col md:flex-row gap-3">
                                    <input
                                        type="text"
                                        name="userName"
                                        value={user.userName}
                                        onChange={handleChange}
                                        placeholder="Tu usuario"
                                        className="bg-white/5 border border-green-400/50 focus:border-green-400 outline-none text-white px-4 py-2 rounded-lg transition-colors w-full md:w-48"
                                    />
                                    <EditButton
                                        onSave={handleEdit}
                                        onCancel={() => setEditUser(false)}
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <p className="text-xl font-bold text-white">
                                        @{state.user}
                                    </p>
                                    <button
                                        onClick={isEdit}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Edit className="cursor-pointer" size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-3 p-2">
                        <label className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                            Correo electrónico
                        </label>
                        <div className="flex flex-col md:flex-row gap-2">
                            <p className="text-xl font-bold text-white">
                                proximamente@algo.com
                            </p>
                            <div>
                                <span className="text-xs text-slate-500 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                                    Próximamente
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}