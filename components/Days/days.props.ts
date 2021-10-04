import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDay } from "../../infrastructure/interfaces/day.interface";

export interface IDaysProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    days: IDay[];
}