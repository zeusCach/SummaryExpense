

//Banco de colores
const BANK_STYLES = {
    nu: 'bg-[#820AD1]',
    bbva: 'bg-[#004481]',
    banorte: 'bg-[#D91A21]',
}

export default function CardComponent({ card, isSelected, onSelect }) {

    //convertimos el nombre del bank en minusculas, para crear logica de background
    const bankName = card.name.toLowerCase();


    //logica para trabajar el color de fondo de la tarjeta
    const colorBank = BANK_STYLES[bankName] ?? 'bg-gray-700';
    console.log('desde el hijo: ', card.id)

    return (
        <>
            <section className="pt-10 md:last:pt-5" >
                <div
                    onClick={(e) => { onSelect(card.id), e.preventDefault(), e.stopPropagation() }}
                    className={`${isSelected ? 'ring-2 ring-orange-500 scale-105' : 'opacity-70 hover:opacity-100'}  w-full md:w-80 h-48 ${colorBank} rounded-2xl p-6 flex flex-col justify-between cursor-pointer`}
                >

                    <div className="flex justify-between items-center">
                        <span className="text-white font-bold text-xl">{card.name}</span>
                        <span className="text-white/60 text-sm">{card.type}</span>
                    </div>

                    <div>
                        <p className="text-white/60 text-sm tracking-widest">
                            {card.number}
                        </p>
                        <p className="text-white font-medium mt-1">{card.user}</p>
                    </div>

                </div>
            </section>
        </>
    )
}