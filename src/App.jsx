import Header from "./components/header/Header";

import { Routes, Route } from "react-router-dom";
import { InfoBitcoin } from "./routes/info-bitcoin/info-bitcoin";
import IdrToBitcoin from "./routes/idr-to-bitcoin/idr-to-bitcoin";
import BitcoinToIdr from "./routes/bitcoin-to-idr/bitcoin-to-idr";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Header key={location.pathname} />}>
        <Route index element={<InfoBitcoin />} />
        <Route path="idr-to-bitcoin" element={<IdrToBitcoin />} />
        <Route path="bitcoin-to-idr" element={<BitcoinToIdr />} />
      </Route>
    </Routes>
  );
}

export default App;
