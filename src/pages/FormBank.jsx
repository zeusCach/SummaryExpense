import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"
import { useContext, useState } from "react"
import { CARD_TYPE } from "../reducer/cardReducer";
import { CardContext } from "../context/cardContext";

const CARD = {
    name: '',
    type: '',
    number: '',
    user: '',
}

const BANKS = [
    { key: 'nu', label: 'Nu' },
    { key: 'bbva', label: 'BBVA' },
    { key: 'banorte', label: 'Banorte' },
    { key: 'otro', label: 'Otro' },
]

export default function FormBank() {

    //importamos dispatch de nuestro context
    const { dispatch } = useContext(CardContext)

    //state que controla nuestro form
    const [card, setCard] = useState(CARD);

    //handleChange que escucha cuando escribimos en nuestro input
    function handleChange(e) {
        const { name, value } = e.target;

        setCard(prev => ({
            ...prev,
            [name]: value
        }));

    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({
            type: CARD_TYPE.ADD,
            payload: card
        })

        //Seteamos el formulario y el id
        setCard(CARD);
    }

    return (
        <>
            <div className="container mx-auto max-w-4xl md:max-w-xl px-5 py-10">

                <div className="flex justify-between items-ba p-8 ">
                    <div>
                        <h1 className="text-2xl text-white font-semibold ">
                            Registra tu tarjeta
                        </h1>
                        <p className="text-lg text-slate-300 pb-10">
                            Puedes registrar débito o crédito
                        </p>
                    </div>

                    <Link to="/tarjetas" className="hidden md:block">
                        <span className="flex items-center gap-2 text-white hover:text-gray-400">
                            <ArrowLeftCircle />
                            Ir a mis tarjetas
                        </span>
                    </Link>


                </div>

                <div className="bg-white/5 rounded-lg p-8 ">

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 p-3">
                            <label htmlFor="name"
                                className="text-2xl font-bold text-white ">
                                ¿Cuál es tu banco?
                            </label>
                            <select
                                name="name"
                                value={card.name}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-gray-700 cursor-pointer"
                            >
                                <option value="" disabled className="text-white/40">
                                    Selecciona tu banco
                                </option>
                                {BANKS.map(bank => (
                                    <option key={bank.key} value={bank.key} className="bg-gray-800 text-white">
                                        {bank.label}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className="flex flex-col gap-3 p-3">
                            <label htmlFor="user"
                                className="text-2xl font-bold text-white ">
                                Nombre del Beneficiario
                            </label>
                            <input
                                type="text"
                                name="user"
                                value={card.user}
                                onChange={handleChange}
                                required
                                placeholder="Ej. Zeus Cach"
                                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-white/10"
                            />
                        </div>

                        <div className="flex flex-col gap-3 p-3">
                            <label className="text-2xl font-bold text-white ">
                                ¿Es débito o crédito?
                            </label>
                            <select
                                name="type"
                                value={card.type}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-gray-700 cursor-pointer"
                            >
                                <option value="" disabled className="text-white/40">
                                    Tipo de tarjeta
                                </option>
                                <option value="credito" className="bg-gray-800 text-white">
                                    Crédito
                                </option>
                                <option value="debito" className="bg-gray-800 text-white">
                                    Débito
                                </option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3 p-3">
                            <label htmlFor="number"
                                className="text-2xl font-bold text-white ">
                                Número de tarjeta
                            </label>
                            <input
                                type="number"
                                name="number"
                                value={card.number}
                                onChange={handleChange}
                                required
                                placeholder="•••• •••• •••• 4242"
                                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-white/10"
                            />
                        </div>

                        <button className="w-full bg-emerald-400 text-white font-semibold px-6 py-3.5 rounded-xl cursor-pointer">
                            Guardar tarjeta
                        </button>
                    </form>

                    <p className="text-2xs text-center text-slate-300/70 pt-8">
                        🔒 No te preocupes, tus datos estan seguros
                    </p>
                    <p className="text-2xs text-center text-slate-300/70 pt-2">
                        nunca te pediremos CVV ni contraseñas
                    </p>

                </div>
                <Link to="/tarjetas" className="block md:hidden">
                    <span className="flex justify-end items-center gap-2 px-4 py-4 text-white hover:text-green-400  ">
                        <ArrowLeftCircle />
                        Ir a mis tarjetas
                    </span>
                </Link>
            </div>
        </>
    )
}