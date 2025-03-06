// ---------- imports... START -----------------------------------------------------------------------------

import { useEffect, useState } from "react"
import "./App.css"

// ---------- imports... END -----------------------------------------------------------------------------

function App() {
  // -----------useStates/variables/setters... START---------------------------------------------------------

  // useStates

  // brand (Audi, BMW, VW)
  const [brand, setBrand] = useState([])

  // selected brand store on refresh (e.g., keep Audi selected after page refresh)
  const [selectedBrand, setSelectedBrand] = useState(() => {
    return localStorage.getItem("selectedBrand")
  })

  // Car Identification (models, month, year)
  const [carDetails, setCarDetails] = useState([])

  // selected model store on refresh (e.g., keep A6 selected after page refresh)
  const [selectedModel, setSelectedModel] = useState(() => {
    return localStorage.getItem("selectedModel")
  })

  // -----------useStates/variables/setters... END---------------------------------------------------------

  return (
    <>
    </>
  )
}

export default App
