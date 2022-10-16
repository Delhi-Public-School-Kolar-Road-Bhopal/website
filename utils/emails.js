const MailJet = require("node-mailjet");

import {
    checkRegistrationStatus,
    verifyEmail as verify
} from './emailTemplates';
const mailJet = new MailJet({
    apiKey: process.env.mailJetApi,
    apiSecret: process.env.mailJetSecret,
});



export const verifyEmail = async (member, id, e) => {

    const email = mailJet
        .post("send", {
            version: "v3.1"
        })
        .request({
            Messages: [{
                From: {
                    Email: "shresth21oct@gmail.com",
                    Name: `Extra Quadrata`,
                },
                To: [{
                    Email: `${member.email}`,
                    Name: `${member.name}`,
                }, ],
                Subject: `Verify your registration for the ${e} event`,
                TextPart: '',
                HTMLPart: verify(member, e, `${process.env.ADDRESS}/verify/${id}`, `${process.env.ADDRESS}/remove/${id}`)
            }, ],
        });
    await email;
}

export const checkRegistration = async (member, registration, e, id) => {
    const email = mailJet
        .post("send", {
            version: "v3.1"
        })
        .request({
            Messages: [{
                From: {
                    Email: "shresth21oct@gmail.com",
                    Name: `Extra Quadrata`,
                },
                To: [{
                    Email: `${member.email}`,
                    Name: `${member.name}`,
                }, ],
                Subject: `Verify your registration for the ${e} event`,
                HTMLPart: checkRegistrationStatus(member, e, `${process.env.ADDRESS}/registration/${registration}`, `${process.env.ADDRESS}/remove/${id}`)
            }, ],
        });
    await email
}