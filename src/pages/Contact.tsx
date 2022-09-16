import React from "react";

import { Banner, Divider } from "../components/common";

import { personelList } from "../assets/data/";

const GoogleMaps = () => {
    const API_KEY = "AIzaSyAQ9_akuj9a1b5QHLajVLylgMnFCEXcQdw";

    return (
        <iframe
            className="w-full "
            width="450"
            height="350"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHfPPLtW_oRQRDriPCWZDP1o&key=${API_KEY}`}
        ></iframe>
    );
};

export default function Contact(): JSX.Element {
    return (
        <div className=" w-full mt-[100px]">
            <Banner style={{ height: "350px" }} title="Contact Us" />
            <div className="container mx-auto mt-20 ">
                <div className="p-7">
                    <h1 className="pt-5 pb-4 text-2xl font-medium border-b border-gray-300">
                        {" "}
                        Personnel{" "}
                    </h1>
                    <div className="pt-6 text-center grid gap-4 md:gap-16 cols-span-full md:grid-cols-3">
                        {personelList.map((personnel, index) => (
                            <div className="" key={index}>
                                <h1 className="font-medium md:pb-2">
                                    {personnel.title}
                                </h1>
                                <div className="">
                                    {personnel.names.map((name, index) => (
                                        <div className="" key={index}>
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Divider />

                    <div className="w-full pb-5 pl-4 text-2xl font-medium border-b border-gray-300 pt-14">
                        {" "}
                        Find Us{" "}
                    </div>
                    <div className="pt-6">
                        <GoogleMaps />
                    </div>

                    <div className="flex pt-10 pb-6 shadow-lg justify-evenly bg-gray-500/10">
                        <div className="">
                            <div className="text-xl font-medium text-center ">
                                Address
                            </div>
                            <div className="text-center">
                                124 Vouliagmenis Ave,
                                <br /> GR16674, Glyfada,
                                <br /> Athens, Greece
                            </div>
                        </div>

                        <div className="">
                            <div className="text-xl font-medium text-center ">
                                Contact
                            </div>
                            <div className="text-center">
                                Phone: +30 210 8982019,
                                <br /> Fax: +30 210 8982474
                                <br />
                                Email: medcare@medcare.gr
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//    return (
//        <section className="contact-wrapper">
//            <Banner title="Contact" />
//            <div className="contact-main ">
//                <div className="contact">
//                    <h1 className="title"> Address </h1>
//                    <div className="address">
//                        124, Vouliagmenis Ave,
//                        <br />
//                        GR16674, Glyfada, Athens, Greece
//                        <br />
//                        <br />
//                        <span className="bold">Phone: </span>+30 210 8982019
//                        <br />
//                        <span className="bold">Fax: </span>+30 210 8982474
//                        <br />
//                        <span className="bold">Email: </span>medcare@medcare.gr
//                    </div>
//                </div>
//                <div className="personel">
//                    <div className="personel-grid-container">
//                        {personelList.map((personel, index) => (
//                            <div className="personel-container" key={index}>
//                                <h1>{personel.title}</h1>
//                                <div className="personel-name-container">
//                                    {personel.names.map((name, index) => (
//                                        <div
//                                            className="peronsel-name-item"
//                                            key={index}
//                                        >
//                                            {name}
//                                        </div>
//                                    ))}
//                                </div>
//                            </div>
//                        ))}
//                    </div>
//                </div>
//            </div>
//        </section>
//    );
//}
