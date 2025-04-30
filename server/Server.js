const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { fullName, email, phoneNumber,  message } = req.body;

  // Set up nodemailer transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "viththusana@gmail.com",
      pass: "jzbk dogl siqv nkmy",
    },
  });

  const mailOptions = {
    from: '"Wedding Matrimony" <viththusana@gmail.com>',
    to: "viththusana@gmail.com",
    subject: "New Contact Form Submission",
    html: `
     <h1 style="font-family: Arial, sans-serif; color: #4CAF50; text-align: center;">New Contact Form Submission</h1>
    <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
      <thead>
        <tr style="background-color: #4CAF50; color: white;">
          <th style="padding: 16px; border: 1px solid #ddd; text-align: left; font-weight: bold;">Field</th>
          <th style="padding: 16px; border: 1px solid #ddd; text-align: left; font-weight: bold;">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #f9f9f9;">Full Name</td>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #f9f9f9;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #fff;">Email</td>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #fff;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #f9f9f9;">Phone Number</td>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #f9f9f9;">${phoneNumber}</td>
        </tr>
        <tr>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #fff;">Message</td>
          <td style="padding: 16px; border: 1px solid #ddd; background-color: #fff;">${message}</td>
        </tr>
      </tbody>
    </table>
    <p style="text-align: center; font-family: Arial, sans-serif; color: #333; margin-top: 20px;">
      This email was generated from a contact form submission.
    </p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return res.status(200).send('Email successfully sent!');
  } catch (error) {
    console.error('Error sending email:', error.message);
    return res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
