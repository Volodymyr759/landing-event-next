import { VenueGalleryProps } from './venue-gallery.props';
import { VenueGalleryCard } from '../VenueGalleryCard/venue-gallery-card';

export const VenueGallery = ({ venueGallery }: VenueGalleryProps): JSX.Element => {
    return (
        <>
            {venueGallery.map(item => <VenueGalleryCard key={item.imgSrc} venueItem={item} />)}
        </>
    );
};