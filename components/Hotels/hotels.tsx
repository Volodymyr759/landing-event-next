import { HotelsProps } from './hotels.props';
import { HotelCard } from '../HotelCard/hotel-card';

export const HotelsList = ({ hotels }: HotelsProps): JSX.Element => {
    return (
        <div className="row" data-aos="fade-up" data-aos-delay="100">
            {hotels.map(hotel => <HotelCard key={hotel.title} hotel={hotel} />)}
        </div>
    );
};