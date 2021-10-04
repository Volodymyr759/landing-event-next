import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IImage } from "../../infrastructure/interfaces/image.interface";

export interface SupportersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    supporters: IImage[];
}