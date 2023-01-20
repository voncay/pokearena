import { Route, Routes } from "react-router-dom";
import TeamSelect from "./Components/TeamSelect";
import IntroBattle from "./Components/IntroBattle";
import BattleBrock from "./Components/BattleBrock";
import BattleErika from "./Components/BattleErika";
import BattleMisty from "./Components/BattleMisty";
import BattleSurge from "./Components/BattleSurge";
import App from "./App"
import NotFound from "./Components/NotFound";

const Router = () => {
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/" ? <BackHome /> : null} */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/select" element={<TeamSelect />} />
        <Route path="/intro" element={<IntroBattle />} />
        <Route path="/battlebrock" element={<BattleBrock />} />
        <Route path="/battlemisty" element={<BattleMisty />} />
        <Route path="/battlesurge" element={<BattleSurge />} />
        <Route path="/battleerika" element={<BattleErika />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default Router;
