import React, { useState } from "react";

import { Carousel, HomeShipBox, Divider } from "../components/common";

import { sliderImageList } from "../assets/data";

const shipBoxData = [
    {
        name: "Aeolos",
        image: "aeolos_2",
    },
    {
        name: "Anthea V",
        image: "anthea_1",
    },
    {
        name: "Christina V",
        image: "christina_1",
    },
    {
        name: "Marylisa V",
        image: "marylisa_1",
    },
    {
        name: "Thrasyvoulos V",
        image: "deck",
    },
];

export default function Home(): JSX.Element {
    const [serviceImg, setServiceImg] = useState<string>();
    const [moreImg, setMoreImg] = useState<string>();

    import("../assets/images/deck.jpg").then((img) => {
        setServiceImg(img.default);
    });
    import("../assets/images/aeolos_4.jpg").then((img) => {
        setMoreImg(img.default);
    });
    return (
        <section className="mt-[100px]">
            <Carousel images={sliderImageList} />

            <div className="container mx-auto mt-2">
                <Divider />
                <h1 className="py-5 text-2xl font-medium tracking-widest text-center ">
                    {" "}
                    About
                </h1>
                <p className="mx-auto text-sm text-center">
                    Alexandria Shipping Hellas S.A. is a Shipping Company
                    operating Bulk Carriers.
                    <br /> The company supports the need for a comprehensive and
                    effective Quality & Environmental management system to
                    ensure that the services offered by this organization meet
                    customer requirements
                </p>
            </div>
            <div className="container mx-auto mt-2">
                <Divider />
                <h1 className="py-5 text-2xl font-medium tracking-widest text-center">
                    {" "}
                    Services
                </h1>
                <p className="pb-4 mx-auto text-sm text-center">
                    Alexandria Shipping management services include operating,
                    maintaining, crewing, and trading the vessels worldwide in a
                    safe, efficient, economic and profitable way. <br />
                    The Management’s headquarters are located in Omonia, Greece
                </p>
            </div>
            <Divider />
            <div className="container mx-auto mt-2"></div>
            <div
                className="w-full h-[400px] my-10 bg-center max-h-full bg-no-repeat bg-auto md:bg-cover "
                style={{ backgroundImage: `url(${moreImg})` }}
            ></div>

            <Divider />
            <HomeShipBox data={shipBoxData} />

            <div className="container mx-auto my-10">
                <Divider />
                <h1 className="py-5 text-2xl font-medium tracking-widest text-center">
                    {" "}
                    More Info{" "}
                </h1>
                <p className="mx-auto mb-10 text-sm text-center">
                    The Company Management System (CMS) is designed to operate
                    within the requirements of ISO 9001:2008, ISO 14001:2004,
                    the ISM code.
                </p>
            </div>
        </section>
    );
}
