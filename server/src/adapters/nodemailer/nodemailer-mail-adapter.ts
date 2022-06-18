import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9c944ee1f1ef9a",
      pass: "033a1428f7e64a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
           await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucas Viana <lviana1550@gmail.com>',
            subject,
            html: body,

        });
    };
}