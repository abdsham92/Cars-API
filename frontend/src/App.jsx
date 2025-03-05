import { useEffect, useState } from "react"
import "./App.css"

const CAR_MODELS_API_CALL = "http://localhost:5000/api/carModels?type=make"

function App() {
  const [models, setModels] = useState([])
  const [selectedBrand, setSelectedBrand] = useState(() => {
    return localStorage.getItem("selectedBrand")
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carModelsResult = await fetch(CAR_MODELS_API_CALL)
        const json = await carModelsResult.json()
        setModels(json.options)
      } catch (error) {
        console.error("Error fetching car models:", error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem("selectedBrand", selectedBrand)
  }, [selectedBrand])

  const handleReset = () => {
    setSelectedBrand("")
  }

  return (
    <>
      <h2>AutoWelt Coding Challenge: Cars API</h2>
      <div className="card">
        <p>Choose the brand of your car</p>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}>

          <option value="" disabled>
            Select Brand
          </option>

          {models?.map((carModel, index) => (
            <option key={index} value={carModel.label}>
              {carModel.label}
            </option>

          ))}
        </select>

        <br />
        <br />

        <button onClick={handleReset}>Reset</button>

      </div>
    </>
  )
}

export default App
