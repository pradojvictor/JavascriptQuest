import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home"

export default function Routes() {
    return(
        <BrowserRouter>
        <WrapperRoutes>
            <Route path="/" element={<Home/>}/>
        </WrapperRoutes>
        </BrowserRouter>
    )
}