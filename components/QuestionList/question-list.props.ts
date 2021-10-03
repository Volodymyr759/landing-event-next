import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IFaq } from "../../infrastructure/interfaces/faq.interfase";

export interface QuestionListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    questions: IFaq[];
}