import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IHotel } from "../../infrastructure/interfaces/hotel.interface";

export interface HotelCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    hotel: IHotel;
}