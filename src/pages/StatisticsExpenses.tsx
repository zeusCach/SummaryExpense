import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useAnalytics } from "../hooks/useAnalytics";
import { TrendingDown, AlertCircle, Sparkles, Bug } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

export default function StatisticsExpenses() {
    const {
        totalGastado,
        totalDisponible,
        porcentajeGastado,
        porCategoria,
        topCategory,
        hormigas,
        suggestions,
        summary
    } = useAnalytics()

    return (
        <div className="p-10 md:px-20 space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl text-white font-semibold">Estadísticas</h1>
                <p className="text-slate-400 text-lg mt-1">Análisis inteligente de tus gastos</p>
            </div>

            {porCategoria.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                    <AlertCircle size={40} className="text-slate-500" />
                    <p className="text-white/70 font-medium">Sin gastos para analizar</p>
                    <p className="text-white/45 text-sm text-center max-w-xs">
                        Añade gastos desde el dashboard para ver tus estadísticas.
                    </p>
                </div>
            ) : (
                <>
                    {/* Resumen general */}
                    <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={16} className="text-emerald-400" />
                            <h2 className="text-emerald-400 text-sm font-medium uppercase tracking-wide">Resumen</h2>
                        </div>
                        <p className="text-slate-300 text-2 leading-relaxed">{summary}</p>

                        {/* Barra de progreso */}
                        <div className="mt-4">
                            <div className="flex justify-between text-2 text-slate-400 mb-1">
                                <span>Gastado {porcentajeGastado.toFixed(0)}%</span>
                                <span>{formatCurrency(totalGastado)} / {formatCurrency(totalDisponible + totalGastado)}</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all ${porcentajeGastado >= 80 ? 'bg-red-400' : porcentajeGastado >= 50 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                                    style={{ width: `${Math.min(porcentajeGastado, 100)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Gráfica por categoría */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-white text-lg font-semibold mb-6">Gastos por categoría</h2>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={porCategoria.map(c => ({ name: c.category, value: c.total }))}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={110}
                                    paddingAngle={4}
                                    dataKey="value"
                                >
                                    {porCategoria.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => value !== undefined ? [formatCurrency(value as number), 'Monto'] : ['', 'Monto']}
                                    contentStyle={{ background: '#0f172a', border: '1px solid #ffffff15', borderRadius: '8px', color: '#fff' }}
                                />
                                <Legend formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 13 }}>{value}</span>} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Categoría top */}
                    {topCategory && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingDown size={16} className="text-amber-400" />
                                <h2 className="text-white text-lg font-semibold">Mayor gasto</h2>
                            </div>
                            <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                                <div>
                                    <p className="text-white font-semibold">{topCategory.category}</p>
                                    <p className="text-slate-400 text-xs">{topCategory.count} gastos registrados</p>
                                </div>
                                <p className="text-amber-400 font-bold text-lg">{formatCurrency(topCategory.total)}</p>
                            </div>
                        </div>
                    )}

                    {/* Gastos hormiga */}
                    {hormigas.length > 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Bug size={16} className="text-red-400" />
                                <h2 className="text-white text-lg font-semibold">Gastos hormiga detectados</h2>
                            </div>
                            <div className="space-y-3">
                                {hormigas.map((h, i) => (
                                    <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                                        <div>
                                            <p className="text-white text-sm font-medium">{h.name}</p>
                                            <p className="text-slate-400">{h.category}</p>
                                        </div>
                                        <p className="text-red-400 font-semibold">{formatCurrency(h.amount)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sugerencias */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h2 className="text-white text-lg font-semibold mb-4">Sugerencias 💡</h2>
                        <div className="space-y-3">
                            {suggestions.map((s, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                                    <span className="text-emerald-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                                    <p className="text-slate-300 text-sm leading-relaxed">{s}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}