import { useNavigate } from "react-router-dom";
import "../Home.css"; // o puedes usar styled-components / inline
import { ChartColumnBigIcon, ChartNoAxesCombined, LockKeyhole, Rocket } from "lucide-react";
import { useUser } from "../hooks/useUser";

export default function Home() {
    const navigate = useNavigate();
    const { state } = useUser();

    const authUser = () => {
        if (state.user) {
            return navigate("/dashboard");
        }

        return navigate("/datos")
    }



    return (
        <div className="land-root">

            {/* Círculos de fondo decorativos */}
            <div className="land-bg-circle orange" />
            <div className="land-bg-circle green" />

            {/* Badge superior */}
            <div className="land-badge">
                <span className="land-dot" />
                Control financiero inteligente
            </div>

            {/* Título principal */}
            <h1 className="land-title">
                Bienvenido a la era<br />
                del ahorro
            </h1>

            {/* Subtítulo */}
            <p className="land-sub">
                Maximiza tus finanzas con un control total de tus gastos.<br />
                Fácil, rápido, sin cuenta bancaria.
            </p>

            {/* Pills de features */}
            <div className="land-pills">
                <span className="land-pill">
                    <Rocket className="text-emerald-500" /> Sin registro bancario
                </span>
                <span className="land-pill">
                    <ChartColumnBigIcon className="text-amber-600" /> Resumen en tiempo real
                </span>
                <span className="land-pill">
                    <LockKeyhole className="text-orange-300" /> Tus datos, tu control

                </span>
            </div>

            {/* Botón CTA principal */}
            <button
                className="land-cta"
                onClick={authUser}
            >
                Comenzar ahora
                <span className="land-cta-arrow">→</span>
            </button>

            {/* Stats inferiores */}
            <div className="land-stats">
                <div className="land-stat">
                    <div className="land-stat-num">100<span>%</span></div>
                    <div className="land-stat-label">Gratis</div>
                </div>
                <div className="land-divider" />
                <div className="land-stat">
                    <div className="land-stat-num"><span>0</span> datos</div>
                    <div className="land-stat-label">Bancarios requeridos</div>
                </div>
                <div className="land-divider" />
                <div className="land-stat">
                    <div className="land-stat-num"><span>∞</span></div>
                    <div className="land-stat-label">Gastos a registrar</div>
                </div>
            </div>

        </div>
    );
}