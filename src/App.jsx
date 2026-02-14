import InfoSummary from "./components/InfoSummary"
import ListExpense from "./components/ListExpense"
import Summary from "./components/summary"

function App() {


  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-screen p-4">

        <Summary />
        <ListExpense />
        <InfoSummary />

      </div>

    </>
  )
}

export default App
