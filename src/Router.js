import { Route, Routes } from "react-router-dom";
import TeamSelect from "./Components/TeamSelect";
import Homepage from "./Components/Homepage";
import IntroBattle from "./Components/IntroBattle";
import BattleBrock from "./Components/BattleBrock";
import BattleErika from "./Components/BattleErika";
import BattleMisty from "./Components/BattleMisty";
import BattleSurge from "./Components/BattleSurge";
import BackHome from "./Components/BackHome";
import { useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/" ? <BackHome /> : null} */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/select" element={<TeamSelect />} />
        <Route path="/intro" element={<IntroBattle />} />
        <Route path="/battlebrock" element={<BattleBrock />} />
        <Route path="/battlemisty" element={<BattleMisty />} />
        <Route path="/battlesurge" element={<BattleSurge />} />
        <Route path="/battleerika" element={<BattleErika />} />
      </Routes>
    </>
  );
};

export default Router;
