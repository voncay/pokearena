import { Route, Routes } from "react-router-dom";
import TeamSelect from "./Components/TeamSelect"
import Homepage from "./Components/Homepage"
import IntroBattle from "./Components/IntroBattle"
import BattleBrock from "./Components/BattleBrock"


const Router = () => {



return(
    <>

    <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/select" element={<TeamSelect />} />
    <Route path="/intro" element={<IntroBattle />}/>
    <Route path="/battlebrock" element={<BattleBrock />} />
    </Routes>

    </>
)
}

export default Router