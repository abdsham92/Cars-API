// ---------- imports... START -----------------------------------------------------------------------------

import { useEffect, useState } from "react";
import "./App.css";

// ---------- imports... END -----------------------------------------------------------------------------

function App() {
  
// -----------useStates/variables/setters... START---------------------------------------------------------

  // useStates

  // brand (Audi, BMW, VW)
  const [brand, setBrand] = useState([]);

  // selected brand store on refresh (e.g., keep Audi selected after page refresh)
  const [selectedBrand, setSelectedBrand] = useState(() => {
    return localStorage.getItem("selectedBrand")
  });

  // Car Identification (models, month, year)
  const [carDetails, setCarDetails] = useState([]);

  // selected model store on refresh (e.g., keep A6 selected after page refresh)
  const [selectedModel, setSelectedModel] = useState(() => {
    return localStorage.getItem("selectedModel")
  });

// -----------useStates/variables/setters... END---------------------------------------------------------


// ---------- useEffects/functions/methods... START -----------------------------------------------------------------------------

  // useEffects

  // fetch available brands from the backend API (Audi, BMW, VW)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const carBrandsResponse = await fetch("http://localhost:5000/api/carModels?type=make");
        const carBrandsData = await carBrandsResponse.json();
        setBrand(carBrandsData.options);
      } catch (error) {
        console.error("Error fetching car brands:", error);
      }
    };
    fetchData();
  }, []);


  // fetch the available brand details from the backend API
  useEffect(() => {
    const fetchCarDetails = async () => {
      if (!selectedBrand) return console.log("Brand selection is empty!");
      try {
        const carDetailsResponse = await fetch(
          `http://localhost:5000/api/carIdentification?model=${selectedBrand}`
        );
        const carDetailsData = await carDetailsResponse.json();
        setCarDetails(carDetailsData);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    fetchCarDetails();
  }, [selectedBrand]);


  // use local storage for the model
  useEffect(() => {
    localStorage.setItem("selectedBrand", selectedBrand);
  }, [selectedBrand]);


  // use local storage for the identification
  useEffect(() => {
    localStorage.setItem("selectedModel", selectedModel);
  }, [selectedModel]);


  // handles the reset button action
  const handleReset = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setCarDetails([]);
    localStorage.removeItem("selectedBrand");
    localStorage.removeItem("selectedModel");
  };

// ---------- useEffects/functions/methods... END -----------------------------------------------------------------------------

  // Find registration month and year data for the selected brand
  
  const availableModelData = carDetails.find(
    (item) => item.model === selectedBrand && item.nextProperty === "registrationMonth"
  );

  const registrationMonthData = carDetails.find(
    (item) => item.model === selectedBrand && item.nextProperty === "registrationYear"
  );

  const registrationYearData = carDetails.find(
    (item) => item.model === selectedBrand && item.nextProperty == null
  );

  const availableModels = availableModelData ? availableModelData.options : [];

  const registrationMonths = registrationMonthData ? registrationMonthData.options : [];

  const registrationYears = registrationYearData ? registrationYearData.options : [];

  return (
    <>
      <h2>AutoWelt Coding Challenge: Cars API</h2>
      <div className="card">
        <p>Choose the brand of your car</p>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="" disabled>
            Select Brand
          </option>

          {brand?.map((carModel, index) => (
            <option key={index} value={carModel.label}>
              {carModel.label}
            </option>
          ))}
        </select>

        {availableModels.length > 0 && (
          <>
            <br />
            <br />
            <p>Select Model</p>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="" disabled>
                Select Model
              </option>

              {availableModels.map((model, index) => (
                <option key={index} value={model.value}>
                  {model.label}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedModel && (
          <>
            <br />
            <br />
            <h3>Car Details</h3>
            <table border="1">
              <thead>
                <tr>
                  <th>Registration Month</th>
                  <th>Registration Year</th>
                </tr>
              </thead>
              <tbody>
                {/* Only show the first entry */}
                {registrationMonths.slice(0, 1).map((month, index) => (
                  <tr key={index}>
                    <td>{month.label}</td> 
                    <td>{registrationYears[index]?.label || "N/A"}</td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <br />
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
