import { Route, Routes } from "react-router-dom";
import { PrincipalPort } from "../pages/PrincipalPort";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<PrincipalPort />}/>
        </Routes>
    );
}