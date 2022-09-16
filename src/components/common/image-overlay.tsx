import React, { useState } from "react";

import { HighlightOff } from "@material-ui/icons";

interface ImageOverlayProps {
    image: string;
    style?: React.CSSProperties;
}
export default function ImageOverlay({
    image,
    style,
}: ImageOverlayProps): JSX.Element {
    const [isOverlay, setOverlay] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    import(`../../assets/images/${image}.jpg`).then((img) => {
        setImageUrl(img.default);
    });

    style = { ...style, backgroundImage: `url(${imageUrl})` };

    const overlayClasses =
        "fixed z-50 bg-contain bg-no-repeat bg-center w-4/5 h-4/5 ";

    return (
        <div className="w-full h-full p-1 bg-white border-2 rounded border-gray-500/50">
            <div
                className="w-full h-full mx-auto bg-center bg-no-repeat bg-cover"
                onClick={() => setOverlay(!isOverlay)}
                style={style}
            >
                <div
                    className={`bg-gray-800/50 flex my-auto items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-50 h-full w-full ${
                        isOverlay ? "" : "hidden"
                    }`}
                >
                    <div
                        className={isOverlay ? overlayClasses : "hidden"}
                        style={{ ...style }}
                    >
                        <HighlightOff
                            className="absolute top-0 right-0"
                            fontSize="large"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
