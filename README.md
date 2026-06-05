# SummaryExpense - Configuración Inicial
> Tu dinero, bajo control.

## 1. Ficha Técnica del Entorno

- **Stack Tecnológico:** JavaScript (JSX) · React 18 · Vite · CSS Modules · npm
- **Justificación del Stack:** React permite construir una interfaz de usuario
  basada en componentes reutilizables, ideal para una app de finanzas personales
  donde múltiples vistas (resumen, historial, categorías) comparten lógica y
  estado. Vite reemplaza a Create React App ofreciendo tiempos de arranque y
  recarga en caliente (HMR) significativamente más rápidos, lo que mejora la
  productividad durante el desarrollo. La arquitectura actual es 100% frontend,
  con una capa de backend (REST API o BFF) planificada para una fase posterior.

- **Herramientas de Desarrollo (Tooling):**
  - **IDE:** Visual Studio Code
  - **Extensiones clave:**
    - ESLint — análisis estático de código
    - Prettier — formato automático
    - ES7+ React/Redux/React-Native snippets — snippets de productividad
    - GitLens — historial de cambios inline
  - **Gestor de paquetes:** npm (v9+)
  - **Entorno de ejecución:** Node.js v20 LTS
  - **Control de versiones:** Git + GitHub
  - **Deploy continuo:** Netlify (conectado al branch `main`)

---

## 2. Ingeniería Aumentada

- **Prompt Utilizado:**
  > Actúa como un arquitecto de software frontend senior. Genera el boilerplate
  > profesional para una aplicación React 18 + Vite llamada "SummaryExpense",
  > una herramienta de gestión de gastos personales. La arquitectura debe seguir
  > el patrón de carpetas por features (feature-based), incluir: configuración de
  > ESLint + Prettier, estructura de carpetas para componentes, pages, hooks,
  > context y utils, un README base, y archivo .env.example. El proyecto debe
  > estar listo para escalar hacia un backend REST en el futuro. Devuelve
  > exclusivamente la estructura de carpetas con una breve descripción de cada
  > archivo/carpeta clave. No incluyas código de componentes aún.

- **Ajuste Humano (Gobernanza):** La IA generó una carpeta `/store` asumiendo el
  uso de Redux, que fue eliminada ya que el proyecto maneja estado con React
  Context nativo para mantener la simplicidad. También propuso una carpeta
  `/services` con axios preconfigurado; se conservó la carpeta pero se eliminó
  la dependencia de axios porque actualmente no existe backend. Estos ajustes
  reflejan el principio de YAGNI (You Aren't Gonna Need It).

---

## 3. Instrucciones de Ejecución

Cualquier desarrollador puede levantar el proyecto con estos 3 comandos:

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/summaryexpense.git

# 2. Instalar dependencias
npm install

# 3. Ejecutar en entorno de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## 4. Estructura del Proyecto

```
summaryexpense/
├── public/
├── src/
│   ├── assets/         # Imágenes, íconos, fuentes
│   ├── components/     # Componentes reutilizables (Button, Card, Modal...)
│   ├── context/        # React Context para estado global
│   ├── hooks/          # Custom hooks (useExpenses, useLocalStorage...)
│   ├── pages/          # Vistas principales (Dashboard, History, Settings)
│   ├── services/       # Capa de comunicación con API (preparada para backend)
│   ├── utils/          # Funciones auxiliares (formatCurrency, groupByDate...)
│   └── main.jsx        # Entry point
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── vite.config.js
└── README.md
```
