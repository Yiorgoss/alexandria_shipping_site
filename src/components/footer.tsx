import React from "react";

import { NavLink } from "react-router-dom";

const footerSitemapLinks = [
    { title: "Home", path: "/" },
    { title: "Company", path: "/company/history" },
    { title: "Fleet", path: "/fleet" },
    { title: "Services", path: "/services/insurance" },
    { title: "Contact", path: "/contact" },
];
const footerServicesLinks = [
    { title: "Insurance & Claims", path: "/services/insurance" },
    { title: "Commercial", path: "/services/commercial" },
    { title: "Operation", path: "/services/operation" },
    { title: "Technical", path: "/services/technical" },
    { title: "DPA", path: "/services/DPA" },
    { title: "Crewing", path: "/services/crewing" },
];
const footerStatementLinks = [
    { title: "Company History", path: "/company/history" },
    { title: "Mission Statement", path: "/company/mission-statement" },
    { title: "Quality", path: "/company/quality" },
    { title: "Health, Safety and Environment", path: "/company/health-safety" },
    {
        title: "Business Ethics Policy and Disciplinary Policy",
        path: "/company/policies",
    },
];

export default function Footer(): JSX.Element {
    return (
        <section className="w-full border-t bg-gray-500/10 ">
            <div className="container p-10 mx-auto text-center grid gap-4 grid-cols-1 md:text-left md:grid-cols-3">
                <ul className="list-inside">
                    <h1 className="text-lg font-semibold"> Sitemap </h1>
                    {footerSitemapLinks.map((link, index) => (
                        <li className="pt-2 pl-2 text-sm" key={index}>
                            <NavLink
                                exact
                                activeClassName="font-medium"
                                className="border-b border-black"
                                to={link.path}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="pt-8 md:pt-0">
                    <h1 className="text-lg font-semibold"> Services </h1>
                    {footerServicesLinks.map((link, index) => (
                        <li className="pt-2 pl-2 text-sm " key={index}>
                            <NavLink
                                exact
                                activeClassName="font-medium"
                                className="mt-6 border-b border-black"
                                to={link.path}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="pt-8 md:pt-0">
                    <h1 className="text-lg font-semibold">
                        Company Statements{" "}
                    </h1>
                    {footerStatementLinks.map((link, index) => (
                        <li className="pt-2 pl-2 text-sm" key={index}>
                            <NavLink
                                exact
                                activeClassName="font-medium"
                                className="mt-6 border-b border-black"
                                to={link.path}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
