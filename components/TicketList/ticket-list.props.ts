import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITicket } from "../../infrastructure/interfaces/ticket.interface";

export interface TicketListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tickets: ITicket[];
}