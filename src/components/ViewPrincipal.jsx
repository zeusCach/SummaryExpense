import InfoSummary from "./InfoSummary";
import Summary from "./Summary";


export default function ViewPrincipal() {
    return (
        <>
            <div className="flex justify-end mr-10 pt-10">
                <button className="bg-green-600 text-slate-50 rounded-lg px-2 py-2 cursor-pointer">
                    Añadir gasto
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                <Summary />
                <InfoSummary />
            </div>
        </>
    )
}