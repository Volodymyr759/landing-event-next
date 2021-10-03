import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SpeakerCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imgSrc: string;
    imgAlt?: string;
    webPageLink?: string;
    name: string;
    description: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
}