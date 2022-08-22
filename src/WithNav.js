import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";

export default () => {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}