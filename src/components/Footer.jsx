
export default function () {
    return (
        <>
            <footer className="bg-gray-800 p-10 mt-5">
                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
                    <p className="text-slate-500 font-semibold text-lg">
                        &copy; {new Date().getFullYear()} Savings - Realizado con 🤟🏼 por
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