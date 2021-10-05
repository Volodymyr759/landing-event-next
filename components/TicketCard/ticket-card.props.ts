import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITicket } from "../../infrastructure/interfaces/ticket.interface";

export interface TicketProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ticket: ITicket;
}