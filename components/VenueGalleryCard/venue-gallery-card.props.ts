import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface VenueGalleryCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imgSrc: string;
    imgAlt?: string;
}