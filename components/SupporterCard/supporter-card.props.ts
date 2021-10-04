import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IImage } from "../../infrastructure/interfaces/image.interface";

export interface SupporterCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    supporter: IImage;
}