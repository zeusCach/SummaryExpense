

export default function EmptyExpenses() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <svg width="160" height="180" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">

                <rect x="20" y="10" width="120" height="90" rx="10" fill="#ffffff08" stroke="#ffffff15" stroke-width="1.5" />
                <rect x="32" y="24" width="55" height="8" rx="3" fill="#ffffff15" />
                <rect x="32" y="38" width="38" height="6" rx="3" fill="#ffffff0a" />
                <rect x="32" y="56" width="100" height="18" rx="5" fill="#ffffff0a" stroke="#ffffff10" stroke-width="1" />
                <rect x="40" y="63" width="30" height="6" rx="3" fill="#ffffff20" />
                <rect x="90" y="63" width="25" height="6" rx="3" fill="#ffffff15" />
                <rect x="32" y="80" width="100" height="14" rx="5" fill="#ffffff06" stroke="#ffffff08" stroke-width="1" />
                <rect x="40" y="85" width="25" height="5" rx="3" fill="#ffffff12" />
                <rect x="90" y="85" width="20" height="5" rx="3" fill="#ffffff10" />

                <circle cx="110" cy="108" r="24" fill="#1a1a2e" stroke="#ffffff12" stroke-width="1.5" />
                <line x1="101" y1="99" x2="119" y2="117" stroke="#ffffff30" stroke-width="2" stroke-linecap="round" />
                <line x1="119" y1="99" x2="101" y2="117" stroke="#ffffff30" stroke-width="2" stroke-linecap="round" />
                <circle cx="110" cy="108" r="20" fill="none" stroke="#ffffff10" stroke-width="1" stroke-dasharray="4 3" />

            </svg>

            <p className="text-white/70 font-medium text-2xl">Sin gastos por aquí</p>
            <p className="text-white/45 text-sm text-center max-w-xs mt-1">
                Añade tu primer gasto y empieza a tomar el control de tu dinero.
            </p>
        </div>
    )
}