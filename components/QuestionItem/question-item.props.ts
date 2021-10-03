import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface QuestionItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    question: string;
    answer: string;
    number: number;
}