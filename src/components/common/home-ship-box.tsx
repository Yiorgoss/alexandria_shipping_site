import React, { useState } from "react";
import { Link } from "react-router-dom";

const useImageHook = (image: string) => {
    const [imageUrl, setImageUrl] = useState<string>();

    import(`../../assets/images/${image}.jpg`).then((img) => {
        setImageUrl(img.default);
    });

    return imageUrl;
};

const BoxImg = ({
    ship,
    style,
}: {
    ship: { name: string; image: string };
    style?: React.CSSProperties;
}) => {
    const imageUrl = useImageHook(ship.image);
    style = { ...style, backgroundImage: `url(${imageUrl})` };

    return (
        <div className="w-full h-full p-1 bg-white border-2 rounded border-gray-500/50">
            <Link
                to="/fleet"
                className="flex items-center justify-center h-full "
            >
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                    style={style}
                >
                    <div className="flex items-center justify-center w-full h-full text-2xl opacity-0 hover:opacity-100 hover:text-3xl transition-all duration-500 hover:bg-black/25">
                        <span className="font-semibold text-white tacking-wider">
                            {ship.name}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default function HomeShipBox({
    data,
}: {
    data: { name: string; image: string }[];
}): JSX.Element {
    return (
        <div className="container mx-auto">
            <h1 className="w-full pt-16 pb-10 text-2xl font-medium tracking-widest text-center ">
                {" "}
                Fleet{" "}
            </h1>
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full h-[350px] sm:h-[250px] md:h-[150px] px-10 mb-16">
                {data.map((ship, index) => (
                    <BoxImg ship={ship} key={index} />
                ))}
            </div>
        </div>
    );
}
