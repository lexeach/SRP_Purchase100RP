import { Route, Routes } from "react-router-dom";
import App from './App';

import QR from './QRcode';
import Purchaser from "./purchaser";

function Router() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Purchaser />} /> 
        <Route path="/QR" element={<QR />} /> 
        
      </Routes>
    </div>
  );
}

export default Router;


















// +8801885056850
