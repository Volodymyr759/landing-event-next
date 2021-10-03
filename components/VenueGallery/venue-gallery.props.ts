import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IVenue } from "../../infrastructure/interfaces/venue.interface";

export interface VenueGalleryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    venueGallery: IVenue[];
}