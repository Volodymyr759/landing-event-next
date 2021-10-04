import Image from 'next/image';
import { HotelCardProps } from './hotel-card.props';

export const HotelCard = ({hotel}: HotelCardProps): JSX.Element => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="hotel">
                <div className="hotel-img">
                    <Image
                        src={hotel.imgSrc}
                        alt={hotel.imgAlt}
                        className="img-fluid"
                        width={800}
                        height={600}
                    />
                </div>
                <h3><a href={hotel.link}>{hotel.title}</a></h3>
                <div className="stars">
                    {new Array(hotel.stars).fill(<i className="bi bi-star-fill"></i>)}
                </div>
                <p>{hotel.description}</p>
            </div>
        </div>
    );
};