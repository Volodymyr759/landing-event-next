import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IFaq } from "../../infrastructure/interfaces/faq.interface";

export interface QuestionListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    questions: IFaq[];
}