import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IHotel } from "../../infrastructure/interfaces/hotel.interface";

export interface HotelsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    hotels: IHotel[];
}