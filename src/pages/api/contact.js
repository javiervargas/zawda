import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create a Nodemailer transporter with your email provider's settings
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'info@zawda.me',
          pass: 'Z4wd4_2024#',
        },
      });

//      console.log("body", req.body);
      // Extract data from the form submission
      const { firstName, lastName, email, company,  message } = req.body;


      // Email content
      const mailOptions = {
        from: email,
        to: 'javier@zawda.me,hello@zawda.me', // Change to your recipient's email
        subject: `New contact form submission from ${firstName} ${lastName}`,
        text: 'Company:' + company + ' ' + message,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

