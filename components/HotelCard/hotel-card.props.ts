import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HotelCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
    imgAlt?: string;
    stars: number;
}