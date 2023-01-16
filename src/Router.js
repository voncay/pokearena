import { Route, Routes } from "react-router-dom";
import App from "./App"
import TeamSelect from "./Components/TeamSelect"
import Homepage from "./Components/Homepage"

const Router = () => {



return(
    <>

    <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/select" element={<TeamSelect />} />

    </Routes>

    </>
)
}

export default Router