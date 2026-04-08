import { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import CardComponent from "../CardComponent";
import { useNavigate } from "react-router-dom";
import { useCard } from "../../hooks/useCard";

export default function Card() {
    const state = useCard();
    const navigate = useNavigate();

    //Selecciona la ultima tarjeta agregada
    const cardSelect = state.card.length > 1 ? state.card.slice(-1) : state.card

    console.log(cardSelect.length)

    return (
        <div className="pt-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-white text-2xl font-semibold">
                        Controla tu tarjeta
                    </h2>
                    <p className="text-slate-400 text-sm mt-1">
                        ¿Cuentas con tarjeta? Administra tus gastos con ella.
                    </p>
                </div>


                <div>

                    {/* Info de tarjeta */}
                    <div className="flex flex-col gap-3 pb-8 overflow-hidden">
                        <label className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                            {!cardSelect.length ? 'No hay tarjetas' : 'Tarjeta actual'}
                        </label>

                        {
                            cardSelect.map(cardItem => (
                                <CardComponent
                                    key={cardItem.id}
                                    card={cardItem}
                                />

                            ))
                        }

                    </div>

                    <button
                        onClick={() => navigate("/tarjetas")}
                        className="self-start px-4 py-2 bg-green-500/10 border bordergreen-500/30 hover:bg-green-500/20 hover:border-green-500 text-green-400 font-medium rounded-lg transition-all cursor-pointer"
                    >
                        Configura tu tarjeta
                    </button>

                </div>

                {/* Nota */}
                <p className="text-slate-500 text-sm mt-5">
                    Recuerda que si no cuentas con tarjeta de crédito/débito, no te preocupes, puedes seguir usando la app.
                </p>

            </div >
        </div >
    )
}