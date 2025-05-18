const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// const app = express();

router.post("/", async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Iyar Wedding Matrimony" <{process.env.GMAIL_USER}>',
    to: process.env.GMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
          <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: #fafafa;">
          <div style="text-align: center; margin-bottom: 20px;">
                  <img src="https://i.ibb.co/6mSqkPw/fav-1.png" alt="Vehicle Logo" style="border-radius: 50%;"/>
</div>
     <h1 style="text-align: center; color: #444; margin-bottom: 24px;">New Contact Form Submission</h1>
             <p style="color: #666; font-size: 16px; text-align: center; margin-bottom: 24px;">You have received a new contact form submission from <strong>${firstName} ${lastName}</strong>. Here are the details:</p>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #4CAF50; color: white;">
          <th style="padding: 12px; text-align: left; border-bottom: 2px solid #4CAF50;">Field</th>
          <th style="padding: 12px; text-align: left; border-bottom: 2px solid #4CAF50;">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #555;">First Name</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #333;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #555;">Last Name</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #333;">${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #555;">Mobile Number</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #333;">${phone}</td>
        </tr>
          <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #555;">Email</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #333;">${email}</td>
        </tr>
          <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #555;">Message</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd; color: #333;">${message}</td>
        </tr>
      </tbody>
    </table>
    <p style="color: #777; font-size: 14px; text-align: center; margin-top: 24px;">
      அகில உலக ஐயர் வீட்டு கல்யாண இலவச திருமண சேவை
    </p>
    </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return res.status(200).send("Email successfully sent!");
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).send("Error sending email");
  }
});

module.exports = router;
