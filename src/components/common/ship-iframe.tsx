import React from "react";

interface shipIFrameProps {
    title: string;
    ytURL: string;
}

export default function ShipIFrame({
    title,
    ytURL,
}: shipIFrameProps): JSX.Element {
    //only so that it can be loadde lazily
    return (
        <div className="w-full h-full p-1 bg-white border-2 rounded border-gray-500/50">
            <iframe
                frameBorder="0"
                clipboard-write="true"
                encrypted-media="true"
                picture-in-picture="true"
                allowFullScreen
                title={`${title} video`}
                src={ytURL}
                className="w-full h-full"
            ></iframe>
        </div>
    );
}
