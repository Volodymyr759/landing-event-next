export interface ITicket{
    accessType: string;
    price: number;
    activities: {
        title: string;
        allowed: boolean;
    }[];
}