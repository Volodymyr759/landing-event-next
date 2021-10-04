import Image from 'next/image';
import { SpeakerCardProps } from './speaker-card.props';

export const SpeakerCard = ({speaker}: SpeakerCardProps): JSX.Element => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="speaker" data-aos="fade-up" data-aos-delay="100">
                <Image
                    src={speaker.imgSrc}
                    alt={speaker.imgAlt}
                    className="img-fluid"
                    width={640}
                    height={480}
                    layout="responsive"
                />
                <div className="details">
                    <h3><a href={speaker.webPageLink}>{speaker.name}</a></h3>
                    <p>{speaker.description}</p>
                    <div className="social">
                        {speaker.twitter ? <a href={speaker.twitter}><i className="bi bi-twitter"></i></a> : null}
                        {speaker.facebook ? <a href={speaker.facebook}><i className="bi bi-facebook"></i></a> : null}
                        {speaker.instagram ? <a href={speaker.instagram}><i className="bi bi-instagram"></i></a> : null}
                        {speaker.linkedin ? <a href={speaker.linkedin}><i className="bi bi-linkedin"></i></a> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};