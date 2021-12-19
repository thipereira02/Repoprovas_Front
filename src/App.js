import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

import GlobalStyle from './layouts/GlobalStyles';
import Home from './pages/Home';
import SendTest from './pages/SendTest';
import ByTeachers from './pages/ByTeachers';
import BySubjects from './pages/BySubjects';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Main />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sendtests' element={<SendTest />} />
                    <Route path='/byteachers' element={<ByTeachers />} />
                    <Route path='/bysubjects' element={<BySubjects />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}