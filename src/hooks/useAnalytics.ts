
import { useExpense } from "./useExpense"
import { useAmount } from "./useAmount"

export const useAnalytics = () => {
    const { state: { expenses } } = useExpense()
    const { state: { amount } } = useAmount()

    const totalGastado = expenses.reduce((acc, e) => acc + e.amount, 0)
    const totalDisponible = amount - totalGastado
    const porcentajeGastado = amount > 0 ? (totalGastado / amount) * 100 : 0

    // 1. Gastos agrupados por categoría
    const porCategoria = expenses.reduce((acc, e) => {
        const existing = acc.find(c => c.category === e.category)
        if (existing) {
            existing.total += e.amount
            existing.count += 1
        } else {
            acc.push({ category: e.category, total: e.amount, count: 1 })
        }
        return acc
    }, [] as { category: string, total: number, count: number }[])
        .sort((a, b) => b.total - a.total)

    // 2. Categoría top
    const topCategory = porCategoria[0] ?? null

    // 3. Gastos hormiga — montos menores al 5% del presupuesto y repetidos
    const limite = amount * 0.05
    const hormigas = expenses.filter(e => e.amount <= limite)

    // 4. Sugerencias basadas en datos reales
    const suggestions: string[] = []

    if (porcentajeGastado >= 80) {
        suggestions.push(`Llevas el ${porcentajeGastado.toFixed(0)}% de tu presupuesto gastado. Considera frenar gastos no esenciales.`)
    }

    if (topCategory) {
        suggestions.push(`Tu mayor gasto es en "${topCategory.category}" con $${topCategory.total.toFixed(2)}. Revisa si puedes reducirlo.`)
    }

    if (hormigas.length >= 3) {
        suggestions.push(`Tienes ${hormigas.length} gastos pequeños que suman $${hormigas.reduce((acc, e) => acc + e.amount, 0).toFixed(2)}. Los gastos hormiga se acumulan rápido.`)
    }

    if (totalDisponible < 0) {
        suggestions.push(`Superaste tu presupuesto por $${Math.abs(totalDisponible).toFixed(2)}. Elimina gastos no esenciales.`)
    }

    if (suggestions.length === 0) {
        suggestions.push('¡Vas bien! Sigue controlando tus gastos.')
    }

    // 5. Resumen general
    const summary = amount === 0
        ? 'Configura tu presupuesto en ajustes para empezar a analizar tus gastos.'
        : totalDisponible >= 0
            ? `Llevas $${totalGastado.toFixed(2)} gastados de $${amount.toFixed(2)} disponibles. Te quedan $${totalDisponible.toFixed(2)}.`
            : `Superaste tu presupuesto por $${Math.abs(totalDisponible).toFixed(2)}. Revisa tus gastos.`

    return {
        totalGastado,
        totalDisponible,
        porcentajeGastado,
        porCategoria,
        topCategory,
        hormigas,
        suggestions,
        summary
    }
}