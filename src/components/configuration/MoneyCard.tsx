import { Edit, RotateCcw } from "lucide-react";
import EditButton from "../EditButton";
import { formatCurrency } from "../../utils/formatCurrency";
import { ChangeEvent } from "react";


//tipamos los props que recibe MoneyCard
type MoneyCardProps = {
    amount: number;
    onRestart: () => void;
    editAmount: boolean;
    onEdit: () => void;
    onSave: () => void;
    onCancel: () => void;
    amountState: { amount: string };
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MoneyCard({
    amount,
    onRestart,
    editAmount,
    onEdit,
    onSave,
    onCancel,
    amountState,
    onChange
}: MoneyCardProps) {

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-3 flex-1">
                <label className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                    Dinero actual
                </label>
                {editAmount ? (
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            inputMode="numeric"
                            name="amount"
                            value={amountState.amount}
                            onChange={onChange}
                            placeholder="0.00"
                            className="bg-white/5 border border-green-400/50 focus:border-green-400 outline-none text-white px-4 py-2 rounded-lg transition-colors w-full md:w-48"
                        />
                        <EditButton onSave={onSave} onCancel={onCancel} />
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <p className="text-3xl font-bold text-white">
                            {formatCurrency(amount)}
                        </p>
                        <button onClick={onEdit} className="text-slate-400 hover:text-white transition-colors">
                            <Edit className="cursor-pointer" size={20} />
                        </button>
                    </div>
                )}
            </div>
            <button
                onClick={onRestart}
                className="flex items-center gap-2 px-4 py-2 border border-red-400/50 text-red-400 rounded-lg hover:bg-red-400/10 hover:border-red-400 transition-all group self-start md:self-center"
            >
                <RotateCcw size={15} className="group-hover:-rotate-180 transition-transform duration-500" />
                Reiniciar
            </button>
        </div>
    )
}