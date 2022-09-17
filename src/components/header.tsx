import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

//import logoLarge from "../assets/images/logo-large.jpg";
//import medcareLogoLarge from "../assets/images/medcare_logo_large.jpg";

const headerLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Company",
        path: "/company/history",
    },
    {
        title: "Fleet",
        path: "/fleet",
    },
    {
        title: "Services",
        path: "/services/commercial",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

export default function Header(): JSX.Element {
    const node = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current && node.current.contains(e.target as Node)) {
            // inside click
            return;
        }
        // outside click
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    //const [image, setImage] = useState();
    //import("../assets/images/logo-small.svg").then((img) =>
    //    setImage(img.default)
    //);
    //const style = {
    //    backgroundImage: `url(${image})`,
    //    backgroundSize: "contain",
    //};
    return (
        <section className="header" ref={node}>
            <div
                className={`fixed top-0 transition-all duration-300 bg-logo-image md:left-0 flex text-navy tracking-widest z-30 justify-around h-screen w-3/4 min-h-full md:shadow-2xl md:transition-none md:min-h-0 md:h-[100px] md:w-full bg-white bg-bottom bg-contain bg-no-repeat ${
                    open ? "left-0" : "left-[-600px]"
                }`}
            >
                <div className="w-full h-full grid grid-cols-3 md:grid-cols-4">
                    <div className="h-[100px] w-[300px] md:w-[330px] overflow-hidden place-start "></div>
                    <div className="my-auto col-span-2">
                        <ul className="flex flex-col justify-start justify-center my-auto text-xl text-center flex-start md:text-sm md:flex-row">
                            {headerLinks.map((link, index) => (
                                <li
                                    className="mx-3 mb-16 md:my-auto"
                                    key={index}
                                >
                                    <NavLink
                                        className="p-2 relative after:absolute after:content-['.'] after:bg-navy after:w-0 after:transition-width after:duration-500 hover:after:w-3/4 after:h-[2px] after:m-auto after:text-transparent after:left-0 after:right-0 after:bottom-0"
                                        activeClassName="md:after:w-3/4"
                                        exact
                                        onClick={() => setOpen(false)}
                                        to={link.path}
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fixed h-[100px] top-0 w-screen bg-white md:hidden md:shadow-2xl ">
                <button
                    className="float-right h-full mr-8"
                    onClick={() => setOpen(!open)}
                >
                    <MenuIcon className="my-auto" fontSize="large" />
                </button>
            </div>
        </section>
    );
}
