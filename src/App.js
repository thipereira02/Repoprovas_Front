import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./layouts/GlobalStyles";
import Home from "./pages/Home";

export default function App() {
    return (
        <>
            <GlobalStyle /><BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}