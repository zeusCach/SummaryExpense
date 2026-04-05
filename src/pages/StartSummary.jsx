import { useState, useEffect, useRef, useReducer, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useAmount } from "../hooks/useAmount";
import { AMOUNT_TYPE } from "../reducer/amountReducer";
import { USER_TYPE } from "../reducer/userReducer";
import { useUser } from "../hooks/useUser";

// Pasos del onboarding, cada objeto representa una pantalla
const STEPS = [
    {
        label: "Cuentanos de ti",
        questionParts: ["Escribe ", "tu nombre"],
        hint: "El nombre con el que personalizaremos tu experiencia",
        field: "name",
        type: "text",
        placeholder: "Ej. Abraham",
        currency: false,
        btnLabel: "Continuar",
    },
    {
        label: "Como esta tu finanza",
        questionParts: ["Cuanto tienes ", "ahora?"],
        hint: "Tu saldo actual para comenzar a hacer seguimiento",
        field: `amount`,
        type: "number",
        placeholder: "0",
        currency: true,
        btnLabel: "Finalizar",
    },
]


export default function StartSummary() {

    const { dispatch: AmountDispatch } = useAmount();
    const { state, dispatch: UserDispatch } = useUser();
    console.log('nombre', state.user)
    // Uso de useNavigate para dirigir a nuestro dashboard
    const navigate = useNavigate();

    // State que acciona segun los pasos que se llevan (0, 1, 2)
    const [step, setStep] = useState(0)

    // State que controla la animacion CSS activa ("enter" | "exit")
    const [anim, setAnim] = useState("enter")

    // State que guarda los valores que el usuario escribe en los inputs
    const [info, setInfo] = useState({ name: "", amount: "" })

    // Ref para acceder directamente al input del DOM y poder enfocarlo
    const inputRef = useRef(null)

    // Effect que se ejecuta cada que se cambia a otro paso
    // Espera 520ms para enfocar el input, dando tiempo a que termine la animacion de entrada
    useEffect(() => {
        const t = setTimeout(() => inputRef.current?.focus(), 520)
        // Cleanup: cancela el timeout si el componente se desmonta antes de ejecutarse
        return () => clearTimeout(t)
    }, [step])

    // Obtiene el campo activo segun el paso actual (ej. "name" o "amount")
    const currentField = step < STEPS.length ? STEPS[step].field : null

    // Obtiene el valor actual del campo activo desde info
    const currentValue = currentField ? info[currentField] : ""

    // Valida que el input tenga contenido para habilitar el boton de continuar
    const onDisable = String(currentValue).trim().length > 0

    // Funcion que avanza al siguiente paso con animacion de salida/entrada
    const advance = () => {
        if (!onDisable) return

        if (step === 0) {
            UserDispatch({
                type: USER_TYPE.ADD,
                payload: { user: info.name }
            })

        } else if (step === 1) {
            AmountDispatch({
                type: AMOUNT_TYPE.ADD,
                payload: Number(info.amount)
            })
        }

        setAnim("exit")
        setTimeout(() => {
            setStep(s => s + 1)
            setAnim("enter")
        }, 380) // 380ms: tiempo que dura la animacion de salida en CSS
    }

    // Permite avanzar con la tecla Enter como atajo
    const handleKey = (e) => {
        if (e.key === "Enter") advance()
    }

    // Actualiza el campo correspondiente en info segun el paso activo
    const handleChange = (e) => {
        const field = STEPS[step].field
        setInfo(prev => ({ ...prev, [field]: e.target.value }))
    }

    // Calcula el porcentaje de progreso segun el paso actual
    const progress = step === 0 ? 0 : step === 1 ? 50 : 100

    return (
        <>
            <div className="sr">
                <div className="sr-grid" />

                {/* Barra de progreso superior, se llena segun el paso */}
                <div className="sr-progress">
                    <div className="sr-progress-fill" style={{ width: `${progress}%` }} />
                </div>

                <div className="sr-header">
                    <div className="sr-logo">SummaryExpense</div>
                    {/* Indicador de paso, solo visible mientras hay pasos activos */}
                    {step < STEPS.length && (
                        <div className="sr-step-indicator">
                            <span>{step + 1}</span> / {STEPS.length}
                        </div>
                    )}
                </div>

                <div className="sr-stage">
                    {/* Renderiza cada paso, aplicando clases de animacion al activo */}
                    {STEPS.map((s, i) => (
                        <div
                            key={i}
                            className={`sr-slide ${step === i ? `active ${anim}` : ""}`}
                        >
                            <div className="sr-question-label">{s.label}</div>
                            <h2 className="sr-question">
                                {s.questionParts[0]}<em>{s.questionParts[1]}</em>
                            </h2>
                            <p className="sr-hint">{s.hint}</p>

                            <div className="sr-input-wrap">
                                {/* Muestra el simbolo $ solo si el paso es de tipo moneda */}
                                {s.currency && <span className="sr-currency">$</span>}
                                <input
                                    // Solo conecta el ref al input del paso activo
                                    ref={step === i ? inputRef : null}
                                    className="sr-input"
                                    type={s.type}
                                    value={info[s.field]}
                                    onChange={handleChange}
                                    onKeyDown={handleKey}
                                    placeholder={s.placeholder}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="sr-actions">
                                <button
                                    className="sr-btn"
                                    onClick={advance}
                                    disabled={!onDisable}
                                >
                                    {s.btnLabel}
                                    <span className="sr-btn-arrow">→</span>
                                </button>
                                <span className="sr-enter-hint">
                                    o presiona <kbd>Enter</kbd>
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Pantalla final: se muestra cuando se completaron todos los pasos */}
                    {step === STEPS.length && (
                        <div className={`sr-slide active ${anim}`}>
                            <div className="sr-done">
                                <div className="sr-done-icon">🎯</div>
                                <h2 className="sr-done-title">
                                    Listo,<br /><span>{info.name}</span>
                                </h2>
                                <p className="sr-done-sub">
                                    Todo está configurado. Empieza a tomar control.
                                </p>
                                <div className="sr-summary-pills">
                                    <div className="sr-pill">
                                        Nombre: <span>{info.name}</span>
                                    </div>
                                    <div className="sr-pill">
                                        {/* Formatea el numero con separadores de miles en español */}
                                        Saldo: <span>${Number(info.amount || 0)}</span>
                                    </div>
                                </div>
                                <button
                                    className="sr-launch"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Empezar ahorrar
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="sr-footer">
                    <div className="sr-security">🔒 Tus datos son seguros · Nunca compartidos</div>
                </div>
            </div>
        </>
    )
}