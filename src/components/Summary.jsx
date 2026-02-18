import { useContext, useState } from "react"
import { expensesDB } from "../data/data"
import InfoSummary from "./InfoSummary";
import { UserContext } from "../context/userContext";



export default function Summary() {
    const [db] = useState(expensesDB)

    const { userName } = useContext(UserContext);
    console.log(userName)
    return (
        <>

            <div className="w-full max-w-2xl mx-auto">

                <h1 className='text-white font-bold text-2xl px-5 py-10'>Hola {userName}, comienza tu carrera</h1>

                <InfoSummary />

                <div className="pt-5" >
                    {
                        db.map(item => (
                            <>
                                <section className=" bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-5 shadow-md hover:shadow-lg transition mb-4" key={item.id}>
                                    <div className="flex justify-between items-start">

                                        <div>
                                            <p className="text-xl font-medium text-white">
                                                {item.title}
                                            </p>
                                            <p className="text-lg text-gray-900  opacity-80">
                                                {item.category}
                                            </p>
                                        </div>

                                        <p className="text-3xl font-bold text-right text-white mt-1">
                                            ${item.amount}
                                        </p>
                                    </div>

                                </section>

                            </>



                        ))
                    }
                </div>
            </div>
        </>
    )
}