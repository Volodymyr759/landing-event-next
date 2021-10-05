import Image from 'next/image';
import { useState } from 'react';
import { HotelCardProps } from './hotel-card.props';

export const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
    const [stars] = useState(new Array(hotel.stars).fill(<i className="bi bi-star-fill"></i>));

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
                    {stars.map((star, index) => <i className="bi bi-star-fill" key={index}></i>)}
                </div>
                <p>{hotel.description}</p>
            </div>
        </div>
    );
};