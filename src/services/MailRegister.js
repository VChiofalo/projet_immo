const Mailjet = require('node-mailjet');
module.exports = (user) => {
    if(process.env.MJ_APIKEY_PUBLIC != "" && process.env.MJ_APIKEY_PRIVATE != "" ) {
        const mailjet = new Mailjet({
            apiKey: process.env.MJ_APIKEY_PUBLIC,
            apiSecret: process.env.MJ_APIKEY_PRIVATE
        });

        mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [{
                From: {
                    Email: `${process.env.MJ_MAIL_SOCIETE}`,
                    Name: `${process.env.MJ_NOM_SOCIETE}`,
                },
                To: [{
                    Email: `${user.email}`,
                    Name:  `${user.last_name} ${user.first_name}`
                }],
                Subject: "Mail inscription ImmoNeuf",
                TextPart: "Bienvenue sur la plateforme ImmoNeuf ! \n\nVotre compte a bien été créé.",
                HTMLPart: "<h3>Bienvenue sur la plateforme ImmoNeuf!</h3><br /><br/>Votre compte a bien été créé.<br /><br/>Merci de l'interet que vous portez à notre agence<br /><br/>L'équipe de ImmoNeuf"
            }]
        });
    }
}