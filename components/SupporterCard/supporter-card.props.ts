import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SupporterCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imgSrc: string;
    imgAlt?: string;
}