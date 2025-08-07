import { useEffect, useState } from "react";
import { fetchPrices, fetchChangePoint } from "./utils/api";
import PriceChart from "./components/PriceChart";
import ChangePointInfo from "./components/ChangePointInfo";

function App() {
  const [prices, setPrices] = useState([]);
  const [changepoint, setChangepoint] = useState(null);

  useEffect(() => {
    fetchPrices().then(res => setPrices(res.data));
    fetchChangePoint().then(res => setChangepoint(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1>Brent Oil Dashboard</h1>
      {changepoint && <ChangePointInfo info={changepoint} />}
      <PriceChart data={prices} changepointDate={changepoint?.changepoint_date} />
    </div>
  );
}

export default App;
