import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
    
    return(
        <>
        <Header/>
         <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;