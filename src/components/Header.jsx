import Perfil from "./Perfil";

export default function Header() {
    return (
        <>
            <div className="bg-gray-800 p-4 flex justify-between items-center">
                <div>
                    <h1 className="text-purple-500 font-bold text-2xl ">SummaryExpense</h1>
                </div>
                <Perfil />
            </div>
        </>
    )
}