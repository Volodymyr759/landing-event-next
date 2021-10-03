import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISupporter } from "../../infrastructure/interfaces/supporter.interface";

export interface SupportersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    supporters: ISupporter[];
}