import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { createNotification } from '../../infrastructure/notification';
import { NotificationType } from '../../infrastructure/enums/notification-types.enum';
import { IEmailObject } from '../../infrastructure/interfaces/email-object.interface';
// import { IMessage } from '../../infrastructure/interfaces/message.interface';

export const BuyTicket = (): JSX.Element => {
	const submitHandler = async (orderTicket: { yourName: string; yourEmail: string; ticketType: string; }) => {
		try {
			const email: IEmailObject = {
				to: orderTicket.yourEmail,
				subject: 'Re: ' + orderTicket.ticketType,
				text: '',
				html: `<div>Thanks for your message, our manager will replay soon.</div>`
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
					throw new Error('Error of sending email.');
				}
			});
			createNotification('Email confirmation has sent.', NotificationType.Success);
		} catch (e) {
			createNotification('So sorry, sending email failed.', NotificationType.Error);
			console.log(e);
		}
	};

	return (
		<>
			<div className="modal-body">
				<Formik
					initialValues={{
						yourName: '',
						yourEmail: '',
						ticketType: 'standardAccess',
					}}
					validationSchema={Yup.object({
						yourName: Yup.string()
							.required('Required')
							.min(4, 'Full name must be 4-50 characters')
							.max(50, 'Full name must be 4-50 characters'),
						yourEmail: Yup.string()
							.required('Required')
							.email('Invalid email')
							.min(4, 'Email address must be 4-50 characters')
							.max(50, 'Email address must be 4-50 characters'),
						ticketType: Yup.string()
							.required('Required')
					})
					}
					onSubmit={
						(values, { setSubmitting, resetForm }) => {
							submitHandler(values);
							resetForm();
							setSubmitting(false);
						}
					}
					validateOnMount
				>
					{props => (
						<Form method="post" role="form">
							<div className="form-group">
								<Field name="yourName" className="form-control" type="text" placeholder="Your Name" />
								<ErrorMessage name="fullName" render={msg => <div className="form-error-message">{msg}</div>} />
							</div>
							<div className="form-group mt-3">
								<Field name="yourEmail" className="form-control" type="email" placeholder="Your Email" />
								<ErrorMessage name="yourEmail" render={msg => <div className="form-error-message">{msg}</div>} />
							</div>
							<div className="form-group mt-3">
								<Field as="select" id="ticket-type" name="ticketType" className="form-select">
									<option value="standardAccess">Standard Access</option>
									<option value="proAccess">Pro Access</option>
									<option value="premiumAccess">Premium Access</option>
								</Field>
							</div>
							<div className="text-center mt-3">
								<button type="submit" className="btn" disabled={!props.isValid || props.isSubmitting}>
									{
										props.isSubmitting ?
											<>
												<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
												<span> Loading...</span>
											</>
											:
											<span>Buy Now</span>
									}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};
