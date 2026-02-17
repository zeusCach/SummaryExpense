import Footer from "./components/Footer"
import FormExpense from "./components/FormExpense"
import Header from "./components/Header"
import InfoSummary from "./components/InfoSummary"
import Perfil from "./components/Perfil"
import Summary from "./components/Summary"

function App() {
  //https://youtube.com/shorts/5AAMKbfcdco?si=SkgoIWPzqae50NtT

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 min-h-screen  md:grid-cols-2 gap-4  p-5">
        <Summary />
        <FormExpense />
      </div>
      <Footer />
    </>
  )
}

export default App
