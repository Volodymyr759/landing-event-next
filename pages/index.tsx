import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import { BuyTicket } from '../components/BuyTicket/buy-ticket.form';
import { DaysList } from '../components/Days/days';
import { DaySchedules } from '../components/DaySchedules/day-schedules';
import { HotelsList } from '../components/Hotels/hotels';
import { SectionHeader } from '../components/SectionHeader/section-header';
import { SendMessageForm } from '../components/SendMessageForm/send-message';
import { SpeakerList } from '../components/Speakers/speakers';
import { SupporterList } from '../components/Supporters/supporters';
import { TicketList } from '../components/TicketList/ticket-list';
import { QuestionList } from '../components/QuestionList/question-list';
import { VenueGallery } from '../components/VenueGallery/venue-gallery';
import { NotificationType } from '../infrastructure/enums/notification-types.enum';
import { IEmailObject } from '../infrastructure/interfaces/email-object.interface';
import { createNotification } from '../infrastructure/notification';
import { AppData } from '../infrastructure/AppData';

export default function Home(): JSX.Element {
	const [subscriptionEmail, setSubscriptionEmail] = useState('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSubscriptionEmail(event.target.value);
	};

	const subscriptionHandler = async () => {
		try {
			if (subscriptionEmail.trim().length > 0) {
				const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				if (!re.test(String(subscriptionEmail).toLowerCase())) {
					createNotification('Email for subscription is not valid.', NotificationType.Error);
					throw new Error('Email for subscription is not valid.');
				}
				const email: IEmailObject = {
					to: subscriptionEmail,
					subject: 'Your subscription has been confirmed.',
					text: '',
					html: `<div>Congrats! You are successfully subscribed.</div>`
				};
				fetch('/api/mailer', {
					method: 'POST',
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ emailObject: email })
				}).then((res) => {
					if (!res.ok) {
						throw new Error('Error of sending subscription email.');
					}
				});
				createNotification('Email confirmation of subscription has sent.', NotificationType.Info);
			}
		} catch (e) {
			createNotification('So sorry, sending subscription email failed.', NotificationType.Error);
			console.log(e);
		}
	};

	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
				<title>TheEvent Bootstrap Template - Index</title>
				<meta content={AppData.metaContentDescription} name="description" />
				<meta content={AppData.metaContentKeywords} name="keywords" />
				<link href="/assets/img/favicon.png" rel="icon" />
				<link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"
					rel="stylesheet" />
				<link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
				<link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
				<link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
				<link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
				<link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
				<link href="/assets/css/style.css" rel="stylesheet" />
			</Head>

			<section id="hero">
				<div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
					<h1 className="mb-4 pb-0">
						{AppData.Hero.titleFirstPart}<br />
						<span>{AppData.Hero.titleSecondPart}</span>{AppData.Hero.titleThirdPart}
					</h1>
					<p className="mb-4 pb-0">{AppData.Hero.address}</p>
					<a href={AppData.Hero.youtubeLink} className="glightbox play-btn mb-4"></a>
					<a href="#about" className="about-btn scrollto">About The Event</a>
				</div>
			</section>

			<main id="main">

				<section id="about">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-6">
								<h2>{AppData.About.title}</h2>
								<p>{AppData.About.description}</p>
							</div>
							<div className="col-lg-3">
								<h3>Where</h3>
								<p>{AppData.About.address}</p>
							</div>
							<div className="col-lg-3">
								<h3>When</h3>
								<p>{AppData.About.timeFirstPart}<br />{AppData.About.timeSecondPart}</p>
							</div>
						</div>
					</div>
				</section>

				<section id="speakers">
					<div className="container" data-aos="fade-up">
						<SectionHeader title={AppData.Speakers.title} description={AppData.Speakers.description} />
						<SpeakerList speakers={AppData.Speakers.speakersList} />
					</div>
				</section>

				<section id="schedule" className="section-with-bg">
					<div className="container" data-aos="fade-up">
						<SectionHeader title={AppData.EventDays.title} description={AppData.EventDays.shortDescription} />
						<DaysList days={AppData.EventDays.days} />
						<h3 className="sub-heading">{AppData.EventDays.fullDescription}</h3>
						<DaySchedules daySchedules={AppData.DaySchedules} />
					</div>
				</section>

				<section id="venue">
					<div className="container-fluid" data-aos="fade-up">
						<SectionHeader title={AppData.Venue.title} description={AppData.Venue.description} />
						<div className="row g-0">
							<div className="col-lg-6 venue-map">
								<iframe src={AppData.Venue.mapLink} frameBorder="0" style={{ border: 0 }} allowFullScreen />
							</div>
							<div className="col-lg-6 venue-info">
								<div className="row justify-content-center">
									<div className="col-11 col-lg-8 position-relative">
										<h3>{AppData.Venue.addressTitle}</h3>
										<p>{AppData.Venue.addressDescription}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container-fluid venue-gallery-container" data-aos="fade-up" data-aos-delay="100">
						<div className="row g-0">
							<VenueGallery venueGallery={AppData.Venue.galleryItems} />
						</div>
					</div>
				</section>

				<section id="hotels" className="section-with-bg">
					<div className="container" data-aos="fade-up">
						<SectionHeader title={AppData.Hotels.title} description={AppData.Hotels.description} />
						<HotelsList hotels={AppData.Hotels.hotelsList} />
					</div>
				</section>

				<section id="gallery">
					<div className="container" data-aos="fade-up">
						<SectionHeader title={AppData.Gallery.title} description={AppData.Gallery.description} />
					</div>
					<div className="container" data-aos="fade-up">
						<div className="row g-0">
							<VenueGallery venueGallery={AppData.Gallery.galleryItems} />
						</div>
					</div>
				</section>

				<section id="supporters" className="section-with-bg">
					<div className="container" data-aos="fade-up">
						<SectionHeader title={AppData.Supporters.title} description={AppData.Supporters.description} />
						<SupporterList supporters={AppData.Supporters.supportersList} />
					</div>
				</section>

				<section id="faq">
					<div className="container" data-aos="fade-up">
						<SectionHeader title={AppData.FAQ.title} description={AppData.FAQ.description} />
						<QuestionList questions={AppData.FAQ.questionsList} />
					</div>
				</section>

				<section id="subscribe">
					<div className="container" data-aos="zoom-in">
						<SectionHeader title="Newsletter" description="Rerum numquam illum recusandae quia mollitia consequatur." />
						<div>
							<div className="row justify-content-center">
								<div className="col-lg-6 col-md-10 d-flex">
									<input type="email" name="email" className="form-control" placeholder="Enter your Email"
										value={subscriptionEmail} onChange={handleChange} />
									<button type="submit" className="ms-2" onClick={subscriptionHandler} >
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="buy-tickets" className="section-with-bg">
					<div className="container" data-aos="fade-up">
						<SectionHeader title="Buy Tickets" description="Velit consequatur consequatur inventore iste fugit unde omnis eum aut." />
						<div className="row">
							<TicketList tickets={AppData.Tickets} />
						</div>
					</div>
					<div id="buy-ticket-modal" className="modal fade">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title">Buy Tickets</h4>
									<button type="button" className="btn-close" data-bs-dismiss="modal"
										aria-label="Close">
									</button>
								</div>
								<BuyTicket />
							</div>
						</div>
					</div>
				</section>

				<section id="contact" className="section-bg">
					<div className="container" data-aos="fade-up">
						<SectionHeader title="Contact Us" description="Nihil officia ut sint molestiae tenetur." />
						<div className="row contact-info">
							<div className="col-md-4">
								<div className="contact-address">
									<i className="bi bi-geo-alt"></i>
									<h3>Address</h3>
									<address>A108 Adam Street, NY 535022, USA</address>
								</div>
							</div>
							<div className="col-md-4">
								<div className="contact-phone">
									<i className="bi bi-phone"></i>
									<h3>Phone Number</h3>
									<p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="contact-email">
									<i className="bi bi-envelope"></i>
									<h3>Email</h3>
									<p><a href="mailto:info@example.com">info@example.com</a></p>
								</div>
							</div>
						</div>

						<SendMessageForm />

					</div>
				</section>

			</main>

			<footer id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 footer-info">
								<img src="assets/img/logo.png" alt="TheEvenet" />
								<p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et
									totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id
									quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.
								</p>
							</div>
							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
									<li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-6 footer-contact">
								<h4>Contact Us</h4>
								<p>
									A108 Adam Street <br />
									New York, NY 535022<br />
									United States <br />
									<strong>Phone:</strong> +1 5589 55488 55<br />
									<strong>Email:</strong> info@example.com<br />
								</p>
								<div className="social-links">
									<a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
									<a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
									<a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
									<a href="#" className="google-plus"><i className="bi bi-instagram"></i></a>
									<a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="copyright">
						&copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
					</div>
					<div className="credits">
						Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
					</div>
				</div>
			</footer>

			<a href="#" className="back-to-top d-flex align-items-center justify-content-center">
				<i className="bi bi-arrow-up-short"></i>
			</a>
			<script src="/assets/vendor/aos/aos.js"></script>
			<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
			<script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
			<script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
			<script src="/assets/js/main.js"></script>
		</div>
	);
}