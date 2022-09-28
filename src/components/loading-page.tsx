import React from "react";

import logo from "../assets/images/logo_blue.svg";

export default function LoadingPage() {
    return (
        <div className="container flex items-center justify-center mx-auto my-auto ">
            <div className="flex flex-col items-center justify-center h-screen animate-pulse ">
                <img
                    src={logo}
                    alt="medcare logo"
                    className="h-[200px] w-[200px]  "
                />
                <div className="mt-10 text-2xl font-medium text-navy">
                    Alexandria Shipping (Hellas) S.A.{" "}
                </div>
            </div>
        </div>
    );
}
