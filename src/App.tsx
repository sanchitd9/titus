import OrderPage from "./components/OrderPage.tsx";
import Header from "./components/Header.tsx";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import OrderHistoryPage from "./components/OrderHistory.tsx";

const App: React.FC = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<OrderPage/>}/>
            <Route path="/account" element={<OrderHistoryPage/>}/>
        </Routes>
    </Router>
);

export default App
