import { useState } from "react";
import "../index.css";
import AppS from "./App.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router"

function App() {
    return (
        <div className={AppS.container}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
