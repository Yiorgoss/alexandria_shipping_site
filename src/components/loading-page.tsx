import React from "react";

import logo from "../assets/images/MedcareShipping.gif";

export default function LoadingPage() {
    return (
        <div className="container flex items-center justify-center mx-auto my-auto ">
            <div className="flex items-center justify-center h-screen">
                <img
                    src={logo}
                    alt="medcare logo"
                    className="w-[500px] object-contain"
                />
            </div>
        </div>
    );
}
