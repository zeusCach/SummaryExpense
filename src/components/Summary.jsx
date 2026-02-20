import { useState } from "react"
import { expensesDB } from "../data/data"


export default function Summary() {
    const [db] = useState(expensesDB)

    return (
        <>

            <div className="w-full max-w-2xl mx-auto">
                <div className="" >
                    <h1 className="text-white text-4xl font-bold pb-5">
                        Resumen de gastos
                    </h1>


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