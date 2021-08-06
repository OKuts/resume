const express = require('express');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kuts.al.vas@gmail.com',
        pass: 'violetpdmk'
    }
})

const mailOptions = {
    from: 'me',
    to: 'kuts.ol.vas@gmail.com',
    subject: 'My resume',
    text: 'My resume was read.'
}

const app = express();
// app.use(express.static('build'));

app.get('/', (req, res) => {
    console.log(55555555555);
    res.sendFile('index.html');
    transporter.sendMail(mailOptions);
    console.log(55555555555);
})

app.listen(3000, () =>
    console.log('Server start on port: ', 3000, 'link: http://localhost:3000/')
);

