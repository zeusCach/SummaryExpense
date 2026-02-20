
export default function () {
    return (
        <>
            <footer className="bg-neutral-800 p-5 mt-5">
                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
                    <p className="text-slate-500 font-semibold text-lg text-center">
                        &copy; {new Date().getFullYear()} SummaryExpense - Por
                        <a href="https://www.linkedin.com/in/zeus-cach-715a84328/"> Zeus Cach
                        </a>
                    </p>
                    <p className="text-slate-500 font-semibold text-lg">
                        <a href="">
                            FeedBack
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}