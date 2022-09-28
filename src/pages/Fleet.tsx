import React from "react";

import { ShipTable, Banner } from "../components/common";

import { shipList } from "../assets/data/";

export default function Fleet(): JSX.Element {
    return (
        <section className="mt-[100px]">
            <Banner title="Fleet" />
            <ShipTable shipList={shipList} />
        </section>
    );
}
