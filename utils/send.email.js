const nodeMailer = require('nodemailer');

const sendEmail = options => {
    const transporter = nodeMailer.createTransport({
        host: process.env.EMAIL_SERVER,
        port: 587,
        secure: false, 
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,

        }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) console.log(err)
        console.log(info)
    })
}

module.exports = sendEmail;