import React from "react";
import Nav from "../global/nav";
import NavMobile from "../global/nav-mobile";
import Footer from "../global/footer";
import { Outlet } from "react-router-dom";
import '../../styles/App.css';

export default function Layout() {
    return (
        <>
            <Nav />
            <NavMobile />
            <main className="mx-auto bg-charcoal">
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}