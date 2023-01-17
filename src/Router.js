import { Route, Routes } from "react-router-dom";
import App from "./App"
import TeamSelect from "./Components/TeamSelect"
import Homepage from "./Components/Homepage"
import IntroBattle from "./Components/IntroBattle"

const Router = () => {



return(
    <>

    <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/select" element={<TeamSelect />} />
    <Route path="/intro" element={<IntroBattle />}/>

    </Routes>

    </>
)
}

export default Router