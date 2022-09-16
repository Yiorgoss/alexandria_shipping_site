import React from "react";
import { NavLink } from "react-router-dom";

import { linkType } from "../../types";

interface SideBarProps {
    title: string;
    linkList: linkType[];
}

export default function SideBar({
    linkList,
    title,
}: SideBarProps): JSX.Element {
    return (
        <div className=" mt-[100px] text-navy w-full py-5 md:max-w-sm ">
            <div className="pt-5 text-2xl font-medium text-center text-navy-dark md:text-left">
                {title} Statements
            </div>
            <div className="">
                <ul className="pt-2 text-center md:text-left ">
                    {linkList.map((link, index) => (
                        <li key={index} className="pt-5 pr-3 text-md">
                            <NavLink
                                activeClassName="font-bold"
                                exact
                                to={link.path}
                            >
                                {link.title}{" "}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
