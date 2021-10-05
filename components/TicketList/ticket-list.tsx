import { TicketListProps } from './ticket-list.props';
import { TicketCard } from '../TicketCard/ticket-card';

export const TicketList = ({ tickets }: TicketListProps): JSX.Element => {
    return (
        <>
            {tickets.map(ticket => <TicketCard ticket={ticket} key={ticket.accessType} />)}
        </>
    );
};