import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SectionHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description?: string;
}