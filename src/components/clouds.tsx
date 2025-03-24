"use client";

import { cn } from "~/lib/utils";

const cloudImages = [
    {
        src: "/clouds/cloud-03.png",
        alt: "Cloud 0",
        animation: "animate-cloud15",
        extra: "z-20 opacity-0",
    },
    {
        src: "/clouds/cloud-03.png",
        alt: "Cloud 1",
        animation: "animate-cloud20",
        extra: "z-1",
    },
    {
        src: "/clouds/cloud-01.png",
        alt: "Cloud 2",
        animation: "animate-cloud40",
        extra: "z-1",
    },
    {
        src: "/clouds/cloud-02.png",
        alt: "Cloud 3",
        animation: "animate-cloud60",
        extra: "z-20 opacity-25",
    },
    {
        src: "/clouds/cloud-04.png",
        alt: "Cloud 4",
        animation: "animate-cloud80",
        extra: "z-20 opacity-50",
    },
];

const Clouds = () => {
    return (
        <>
            {cloudImages.map(({ src, alt, animation, extra }) => (
                <img
                    key={alt}
                    src={src}
                    alt={alt}
                    className={cn("absolute w-full top-0 left-0 lg:max-h-1/6  2xl:max-h-2/7", animation, extra)}
                    style={{ userSelect: "none" }}
                />
            ))}
        </>
    );
};

export default Clouds;
