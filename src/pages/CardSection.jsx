
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../context/cardContext";
import CardComponent from "../components/CardComponent";
import EmptyCards from "../components/EmptyCards";
import { ArrowLeftCircle } from "lucide-react";


export default function CardSection() {

    //hacemos uso del context para manejar el card y acceder a sus propiedades
    const { card } = useContext(CardContext);

    //hook que controla el onSelect de nuestra tarjeta
    const [selectCard, setSelectCard] = useState(null);

    console.log('Desde el padre:', selectCard)

    //funcion que controla el onSelect
    function handleSelect(id) {

        //si la tarjeta esta ya seleccionada y se vulve a seleccionar devuelve null para deseleccionar
        setSelectCard(prev => prev === id ? null : id)
    }
    return (
        <>

            <div className="space-y-10 p-10">
                <div className="md:flex items-baseline justify-between " >
                    <div>
                        <h1 className="text-white text-4xl font-bold pb-5">
                            Tus tarjetas actuales
                        </h1>
                        <p className="text-lg text-slate-300 pb-10">
                            Selecciona una tarjeta para comenzar.
                        </p>
                    </div>

                    <Link to='/registrar-card' className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg">
                        Añadir tarjeta
                    </Link>
                </div>

                { /* Si no hay tarjetas renderiza el componente de emptyCards */}
                {card.length === 0
                    ?
                    <div className="flex flex-col items-center justify-center h-[60vh] md:max-h-max">
                        <EmptyCards />
                    </div>

                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {card.map(cardItem => (
                            <CardComponent
                                key={cardItem.id}
                                isSelected={selectCard === cardItem.id}
                                onSelect={handleSelect}
                                card={cardItem}
                            />

                        ))
                        }
                    </div>}


                <Link to="/dashboard">
                    <span className="flex justify-end items-center gap-2 px-4 py-4 text-white hover:text-green-400  ">
                        <ArrowLeftCircle />
                        Ir al dashboard
                    </span>
                </Link>
            </div>
        </>
    )
}