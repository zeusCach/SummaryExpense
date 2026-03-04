import {
    ChartLine,
    CirclePlus,
    LogOutIcon,
    UserCog2Icon
} from "lucide-react";


export default function NavigatorDown() {
    return (
        <div className="bg-neutral-800 p-4">

            <div className="flex justify-between items-center px-4">
                <div className="flex flex-col items-center gap-1">
                    <UserCog2Icon size={30} className="text-white cursor-pointer active:text-emerald-400" />
                    <p className="text-xs text-gray-400">configuración</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <CirclePlus size={30} className="text-white cursor-pointer active:text-emerald-400" />
                    <p className="text-xs text-gray-400">Añade gasto</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <ChartLine size={30} className="text-white cursor-pointer active:text-emerald-400" />
                    <p className="text-xs text-gray-400">Estadísticas</p>
                </div>
            </div>

        </div>
    )
}