import React from "react";

export default function Divider({ top = false }: { top?: boolean }) {
    return (
        <div className="my-10">
            <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
    );
}
