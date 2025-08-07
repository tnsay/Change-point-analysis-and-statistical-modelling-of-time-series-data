import { useEffect, useState } from "react";
import { fetchPrices, fetchChangePoint } from "./utils/api";
import PriceChart from "./components/PriceChart";
import ChangePointInfo from "./components/ChangePointInfo";

function App() {
  const [prices, setPrices] = useState([]);
  const [changepoint, setChangepoint] = useState(null);
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    // fetch price data
    fetchPrices()
      .then(res => {
        setPrices(res.data);
      })
      .catch((err) => {
        console.error("Error fetching prices:", err);
        setError("Failed to load price data.");
      });

    // fetch change point data
    fetchChangePoint()
      .then(res => {
        setChangepoint(res.data);
      })
      .catch((err) => {
        console.error("Error fetching change point:", err);
        setError("Failed to load change point data.");
      });
  }, []);

  return (
    <div className="p-4">
      <h1>Brent Oil Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      {changepoint && <ChangePointInfo info={changepoint} />}
      <PriceChart data={prices} changepointDate={changepoint?.changepoint_date} />
    </div>
  );
}

export default App;
