import Image from 'next/image';
import { VenueGalleryCardProps } from './venue-gallery-card.props';

export const VenueGalleryCard = ({venueItem}: VenueGalleryCardProps): JSX.Element => {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
                <a href={venueItem.imgSrc} className="glightbox" data-gall="venue-gallery">
                    <Image
                        src={venueItem.imgSrc}
                        alt={venueItem.imgAlt ?? ''}
                        className="img-fluid"
                        width={800}
                        height={600}
                        layout="responsive"
                    />
                </a>
            </div>
        </div>
    );
};