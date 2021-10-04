import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IImage } from "../../infrastructure/interfaces/image.interface";

export interface VenueGalleryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    venueGallery: IImage[];
}