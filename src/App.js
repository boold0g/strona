import { Route, Routes } from "react-router-dom";
import Strony from "./Components/Strony";
import GaleriaPage from "./Pages/Galeria";
import KontaktPage from "./Pages/Kontakt";
import ProjektyPage from "./Pages/Projekty";
import StronaGlownaPage from "./Pages/StronaGlowna";
function App() {
  return (
    <div id="everything">
      <Strony />
      <Routes>
        <Route path="/" element={<StronaGlownaPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/projekty" element={<ProjektyPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
    </div>
  );
}

export default App;
