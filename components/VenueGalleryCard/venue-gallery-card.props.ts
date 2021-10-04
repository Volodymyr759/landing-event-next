import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IImage } from "../../infrastructure/interfaces/image.interface";

export interface VenueGalleryCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    venueItem: IImage;
}