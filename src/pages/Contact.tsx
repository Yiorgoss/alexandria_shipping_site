import React from "react";

import { Banner, Divider } from "../components/common";

//import { personelList } from "../assets/data/";

//const GoogleMaps = () => {
//
//    return (
//        <iframe
//            className="w-full "
//            width="450"
//            height="350"
//            frameBorder="0"
//            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHfPPLtW_oRQRDriPCWZDP1o&key=${API_KEY}`}
//        ></iframe>
//    );
//};

export default function Contact(): JSX.Element {
    return (
        <div className=" w-full mt-[100px]">
            <Banner style={{ height: "350px" }} title="Contact Us" />
            <div className="container mx-auto mt-20 ">
                <Divider />
                <div className="flex pt-10 pb-6 shadow-lg justify-evenly bg-gray-500/10">
                    <div className="">
                        <div className="text-xl font-medium text-center ">
                            Address
                        </div>
                        <div className="text-center">
                            7, Omonia Square
                            <br /> 104 31, Athens
                            <br /> Greece
                        </div>
                    </div>

                    <div className="">
                        <div className="text-xl font-medium text-center ">
                            Contact
                        </div>
                        <div className="text-center">
                            Phone: +30 210 253 8000,
                            <br /> Fax: +30 210 253 6900
                            <br /> Email: info@alexship.gr
                            <br /> TELEX: 211021 ALEX GR
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
        </div>
    );
}
