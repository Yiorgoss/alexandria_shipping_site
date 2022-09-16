import React, { useState, lazy, Suspense, ReactNode } from "react";

import { YouTube, ExpandMore, Fullscreen } from "@material-ui/icons/";

import { ImageOverlay, ShipIFrame } from "./";
import { shipType } from "../../types";

//const ShipIFrame = lazy(() => import("./ship-iframe"));

interface shipTableProps {
    shipList: shipType[];
}

const TableHeader = () => {
    return (
        <div className="hidden text-2xl font-bold text-center md:grid grid-cols-1 md:grid-cols-5">
            <label className="pt-8 pb-10 pr-10">Name</label>
            {/*10 padding so expand more fits*/}
            <label className="px-6 pt-8 pb-10">Type</label>
            <label className="px-6 pt-8 pb-10">Year</label>
            <label className="px-6 pt-8 pb-10">Flag</label>
            <label className="px-6 pt-8 pb-10">DWT</label>
        </div>
    );
};

const TableData = ({ shipList }: { shipList: shipType[] }) => {
    return (
        <>
            {shipList.map((ship, index) => (
                <TableRow key={index} index={index} ship={ship} />
            ))}
        </>
    );
};

const TableRow = ({ ship, index }: { ship: shipType; index: number }) => {
    const [isHidden, setHidden] = useState(false);

    const bgAlternate = index % 2 == 0 ? "bg-navy-light" : "bg-white";

    return (
        <div
            key={index}
            className={
                "text-left grid grid-cols-1 md:grid-cols-5 md:text-center" +
                " " +
                bgAlternate
            }
        >
            {ship.images.length === 0 ? (
                <div className="py-4 pt-5 text-left md:py-6 md:text-center before:content-['Name'] before:pr-4 before:font-bold md:before:hidden">
                    <span>{ship.name}</span>
                </div>
            ) : (
                <div className="py-4 pt-5 ml-5 my-auto text-left md:py-6 md:text-center before:content-['Name'] before:pr-4 before:font-bold md:before:hidden">
                    <span
                        className=" cursor-pointer "
                        onClick={() => setHidden(!isHidden)}
                    >
                        {ship.name}
                    </span>
                    <div className="hidden md:inline">
                        <ExpandMore
                            fontSize="medium"
                            onClick={() => setHidden(!isHidden)}
                            className={`float-right cursor-pointer mr-12 ${
                                isHidden ? "rotate-90" : ""
                            }`}
                        />
                    </div>
                </div>
            )}
            <div className="py-4 md:py-6 ml-5 md:before:hidden before:content-['Type'] before:pr-4 before:font-bold">
                <span
                    className="cursor-pointer"
                    onClick={() => setHidden(!isHidden)}
                >
                    {ship.type}
                </span>
            </div>
            <div className="py-4 md:py-6 ml-5 md:before:hidden before:content-['Year'] before:pr-4 before:font-bold">
                <span
                    className="cursor-pointer"
                    onClick={() => setHidden(!isHidden)}
                >
                    {ship.year}
                </span>
            </div>
            <div className="py-4 md:py-6 ml-5 md:before:hidden before:content-['Flag'] before:pr-4 before:font-bold">
                <span
                    className="cursor-pointer"
                    onClick={() => setHidden(!isHidden)}
                >
                    {ship.flag}
                </span>
            </div>
            <div className="py-4 md:py-6 ml-5 md:before:hidden before:content-['DWT'] before:pr-4 before:font-bold">
                <span
                    className="cursor-pointer"
                    onClick={() => setHidden(!isHidden)}
                >
                    {ship.dwt}
                </span>
            </div>
            <div
                className={`py-4 mx-auto grid w-full col-span-full ${
                    isHidden ? "md:static" : "md:hidden"
                }`}
            >
                <div className="w-full p-6 grid grid-cols-2 gap-4">
                    {ship.images.map((image, index) => (
                        <div
                            className="mx-auto h-[200px] md:h-[250px] md:max-w-full w-3/5 h-3/5 py-5"
                            key={index}
                        >
                            <ImageOverlay
                                image={image.name}
                                style={image.style}
                            />
                        </div>
                    ))}
                    {ship.iframe && (
                        <div
                            className="mx-auto h-[200px] md:h-[250px] md:max-w-full w-3/5 h-3/5 py-5"
                            key={index}
                        >
                            <ShipIFrame
                                title={ship.iframe.title}
                                ytURL={ship.iframe.yturl}
                                key={index}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const IFrameLoading = () => {
    return (
        <div className="iframe-loading">
            <YouTube />
        </div>
    );
};

export default function ShipTable({ shipList }: shipTableProps): JSX.Element {
    return (
        <div className="container mx-auto overflow-scroll no-scrollbar">
            <div className="w-full mt-10">
                <TableHeader />
                <TableData shipList={shipList} />
            </div>
        </div>
    );
}
