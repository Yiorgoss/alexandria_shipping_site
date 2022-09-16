import React, { useState, useEffect } from "react";

interface BannerProps {
    title?: string;
    image?: string;
    style?: React.CSSProperties;
}

export default function Banner({
    title,
    image,
    style,
}: BannerProps): JSX.Element {
    const [imageUrl, setImageUrl] = useState<string>();

    if (image === "" || image === undefined) {
        image = "ship_DEFAULT";
    }

    import(`../../assets/images/${image}.jpg`).then((img) => {
        setImageUrl(img.default);
    });

    style = { ...style, backgroundImage: `url(${imageUrl})` };

    return (
        <div className="mt-5 md:mt-[100px]">
            <div
                style={style}
                className="bg-no-repeat bg-cover bg-center flex w-full h-[200px]"
            >
                <div className="w-full my-auto text-center">
                    {title && (
                        <span className="text-4xl tracking-widest text-white font-lg text-outline">
                            {title}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
