import Image from 'next/image';
import { VenueGalleryCardProps } from './venue-gallery-card.props';

export const VenueGalleryCard = (item: VenueGalleryCardProps): JSX.Element => {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
                <a href={item.imgSrc} className="glightbox" data-gall="venue-gallery">
                    <Image
                        src={item.imgSrc}
                        alt={item.imgAlt ?? ''}
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