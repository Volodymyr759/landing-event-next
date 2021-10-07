## Description:

This is a [Next.js](https://nextjs.org/) project written in TypeScript.

The main purpose of the landing-page is to present complete information about the event on one page with the possibility of subscribing to news, ordering tickets and sending a message to the event-agency administrator.

The landing page uses the classic Bootstrap-design which is sensitive to all screen sizes of devices.

Demo - version: https://landing-event-next.vercel.app

Hosting and domain name are free, more info: https://vercel.com/

## Functionality:

All users are anonymous.

News subscription: the user enters his e-mail address in the NEWSLETTER section and clicks the Subscribe button - the server part of the site will send a message to the administrator and confirmation to the user at the specified e-mail.

Buy a ticket: the user selects one of the ticket options, enters his name, address and clicks the "Buy Now" button - the site will send a message to the administrator about ordering a ticket, as well as an confirmation message to the user at the specified e-mail.

CONTACT US message: the user enters his name, e-mail, subject and text of the message, clicks the "Send message" button - the site will send a message to the administrator.

## Content Management

The administrator can change all the information about the event by editing the json data file: https://github.com/Volodymyr759/landing-event-next/blob/main/infrastructure/AppData.ts (needed create a separated repository for the administrator).

After making changes, click "commit" - the linked web server keeps track of updates of the main branch of the repository and automatically publishes changes to the site (takes about 1 minute).

## Contact

Regarding the use, deeper modifications of the design and changes in the functionality of the project, please use the mail: logisticmaster.2000@gmail.com
