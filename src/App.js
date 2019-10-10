import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import List from "./components/List";
import Routes from "./Routes";

function App() {
  const [airtable, setAirTable] = useState();
  const [records, setRecords] = useState();

  useEffect(() => {
    // Get request to airtable endpoint with api key appended to the end of url
    axios
      .get(
        `https://api.airtable.com/v0/appgqiRyvVDHlPI0u/Master?api_key=keyfahybUIpBkegFv`
      )
      .then(res => setAirTable(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log("airtable info", airtable);
  return (
    <div className="App">
      <Routes />
      <h1>Records !</h1>
      {/* Airtable stores information in records which is why we have to access this nested data */}
      {airtable && <List airtable={airtable.records} />}
    </div>
  );
}

export default App;
