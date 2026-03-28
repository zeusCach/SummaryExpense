
export default function EmptyCards() {
    return (
        <div className="flex flex-col items-center justify-center px-5 py-10 gap-4">

            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="30" width="80" height="50" rx="8" fill="#ffffff10" stroke="#ffffff20" strokeWidth="1.5" />
                <rect x="20" y="40" width="80" height="50" rx="8" fill="#ffffff08" stroke="#ffffff15" strokeWidth="1.5" />
                <rect x="30" y="50" width="80" height="50" rx="8" fill="#ffffff05" stroke="#ffffff10" strokeWidth="1.5" />
                <circle cx="90" cy="85" r="18" fill="#1a1a2e" stroke="#ffffff10" strokeWidth="1.5" />
                <text x="90" y="91" textAnchor="middle" fill="#ffffff40" fontSize="40">?</text>
            </svg>

            <p className="text-white/70 font-medium text-lg">Sin tarjetas por aquí</p>
            <p className="text-white/50 text-sm text-center max-w-xs">
                Agrega tu primera tarjeta para empezar a controlar tus gastos.
            </p>

        </div>
    )
}