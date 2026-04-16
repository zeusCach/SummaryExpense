import { useNavigate } from "react-router-dom";
import "../Home.css";
import { ChartColumnBigIcon, ChartNoAxesCombined, CreditCard, LockKeyhole, Rocket } from "lucide-react";
import { useUser } from "../hooks/useUser";

export default function Home() {
    const navigate = useNavigate();
    const { state } = useUser();

    const authUser = () => {
        return state.user
            ? navigate("/dashboard")
            : navigate("/datos")
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
                    <Rocket size={14} className="text-emerald-500" /> Sin registro bancario
                </span>
                <span className="land-pill">
                    <ChartColumnBigIcon size={14} className="text-amber-600" /> Resumen en tiempo real
                </span>
                <span className="land-pill">
                    <LockKeyhole size={14} className="text-orange-300" /> Tus datos, tu control
                </span>
            </div>

            {/* Indicador de scroll */}
            <div className="land-scroll-hint">
                <span className="text-white">Conoce más</span>
                <div className="land-scroll-arrow" />
            </div>

            {/* ===== SECCIÓN: Qué puedes hacer ===== */}
            <section className="home-section">
                <p className="home-section-label">Que puedes hacer</p>
                <h2 className="home-section-title">Todo lo que necesitas,<br />sin lo que no necesitas</h2>
                <p className="home-section-sub">Sin cuenta bancaria, sin registro tedioso. Registra tus gastos, vincula tus tarjetas y deja que la app haga el resto.</p>
                <div className="home-divider" />

                <div className="home-features">
                    <div className="home-feat">
                        <div className="home-feat-icon" style={{ background: 'rgba(34,197,94,0.1)' }}>
                            <ChartColumnBigIcon size={18} color="#22c55e" />
                        </div>
                        <div className="home-feat-title">Control de gastos</div>
                        <div className="home-feat-desc">Registra cada gasto al momento. Categorias, montos y fechas siempre a la mano.</div>
                    </div>
                    <div className="home-feat">
                        <div className="home-feat-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>
                            <CreditCard size={18} color="#f59e0b" />
                        </div>
                        <div className="home-feat-title">Tarjetas opcionales</div>
                        <div className="home-feat-desc">Vincula tus tarjetas de debito o credito si las tienes. Si no, la app funciona igual de bien.</div>
                    </div>
                    <div className="home-feat">
                        <div className="home-feat-icon" style={{ background: 'rgba(139,92,246,0.1)' }}>
                            <ChartNoAxesCombined size={18} color="#a78bfa" />
                        </div>
                        <div className="home-feat-title">Reportes con IA</div>
                        <div className="home-feat-desc">Genera resumenes estadisticos con sugerencias reales para cuidar tu dinero.</div>
                    </div>
                    <div className="home-feat">
                        <div className="home-feat-icon" style={{ background: 'rgba(255,140,0,0.1)' }}>
                            <LockKeyhole size={18} color="#ff8c00" />
                        </div>
                        <div className="home-feat-title">Tus datos, tu control</div>
                        <div className="home-feat-desc">Todo vive en tu dispositivo. Nadie accede a tu informacion, ni nosotros.</div>
                    </div>
                </div>
            </section>

            {/* ===== SECCIÓN: Cómo empezar ===== */}
            <section className="home-section">
                <p className="home-section-label">Como empezar</p>
                <h2 className="home-section-title">En tres pasos estas listo</h2>
                <p className="home-section-sub">No necesitas crear una cuenta bancaria ni compartir datos sensibles. Solo entra y empieza.</p>
                <div className="home-divider" />

                <div className="home-steps">
                    <div className="home-step">
                        <div className="home-step-num">1</div>
                        <div className="home-step-body">
                            <div className="home-step-title">Configura tu perfil</div>
                            <div className="home-step-desc">Ingresa tu nombre y define tu presupuesto mensual. Sin correos, sin contraseñas, sin datos bancarios. Tu informacion se guarda directamente en tu navegador o dispositivo.</div>
                        </div>
                    </div>
                    <div className="home-step">
                        <div className="home-step-num">2</div>
                        <div className="home-step-body">
                            <div className="home-step-title">Registra tus gastos</div>
                            <div className="home-step-desc">Agrega cada gasto con monto, categoria y descripcion. Puedes vincular tarjetas de debito o credito si las tienes, o usar la app sin ellas.</div>
                        </div>
                    </div>
                    <div className="home-step">
                        <div className="home-step-num">3</div>
                        <div className="home-step-body">
                            <div className="home-step-title">Analiza y mejora</div>
                            <div className="home-step-desc">Revisa tus estadisticas, genera reportes con inteligencia artificial y recibe sugerencias concretas para mejorar tus finanzas cada mes.</div>
                        </div>
                    </div>
                </div>

                {/* Banner de privacidad */}
                <div className="home-privacy">
                    <div className="home-privacy-icon">
                        <LockKeyhole size={20} color="#f59e0b" />
                    </div>
                    <div>
                        <div className="home-privacy-title">Privacidad por diseño</div>
                        <div className="home-privacy-desc">Los datos que manejas dentro de Summary nunca salen de tu dispositivo. No hay servidores que almacenen tu historial de gastos, ni terceros que accedan a tu informacion. Todo vive en el storage de tu navegador.</div>
                    </div>
                </div>

                {/* CTA final */}
                <div className="home-cta-wrap">
                    <button className="land-cta" onClick={authUser}>
                        Comenzar ahora
                        <span className="land-cta-arrow">→</span>
                    </button>
                    <p className="home-cta-sub">Gratis. Sin cuenta bancaria. Sin datos personales.</p>
                </div>
            </section>

        </div>
    );
}