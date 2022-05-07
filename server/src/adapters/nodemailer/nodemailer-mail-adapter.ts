import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

// parte para enviar email com o feedback
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bf55f52bf1fb6d",
      pass: "a501483418e2b8"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <no-replay@feedget.com>',
            to: 'Luan Soares <testes.codes@gmail.com>',
            subject: subject,
            html: body
        });
    }
}