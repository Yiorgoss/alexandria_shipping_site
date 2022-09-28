import React, { useState } from "react";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const CarouselImage = ({
    image,
    className,
    style,
}: {
    image: string;
    className: string;
    style?: React.CSSProperties;
}) => {
    const [imageUrl, setImageUrl] = useState<string>();

    import(`../../assets/images/${image}.jpg`).then((img) => {
        setImageUrl(img.default);
    });

    return (
        <img
            src={imageUrl}
            className={className + " "}
            style={style}
            alt="carousel image"
        />
    );
};

export default function Carousel({
    images,
}: {
    //Im lazy dont hate me
    images: { name: string; style?: React.CSSProperties }[];
}): JSX.Element {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return (
        <div className="h-[300px] md:h-[400px] relative transition-all duration-1000 object-contain overflow-hidden ">
            {images.map((image, index) => (
                <div
                    className={index === current ? "left-0" : "left-[-400px]"}
                    key={index}
                >
                    {index === current && (
                        <CarouselImage
                            image={image.name}
                            key={index}
                            className=" md:w-screen md:mt-[-400px] 2xl:mt-[-200px]"
                            style={image.style}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
