
export default function CardSummary({ title, category, amount }) {
    return (
        <>
            <section className=" 
            bg-gradient-to-r from-orange-400 to-orange-600 
            rounded-2xl p-5 shadow-md hover:shadow-lg 
            transition mb-4"

            >
                <div className="flex justify-between items-start">

                    <div >
                        <p className="text-xl font-medium text-white">
                            {title}
                        </p>
                        <p className="text-lg text-gray-900  opacity-80">
                            {category}
                        </p>
                    </div>

                    <p className="text-3xl font-bold text-right text-white mt-1">
                        ${amount}
                    </p>
                </div>

            </section>
        </>
    )
}