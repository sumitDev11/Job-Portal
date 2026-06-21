import { Receiver } from "@upstash/qstash";
import nodemailer from "nodemailer";
import { Request, Response } from "express";

const receiver = new Receiver({
  currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY || "",
  nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY || "",
});

export const sendMailHandler = async (req: Request, res: Response) => {
  const signature = req.headers["upstash-signature"] as string;
  const body = req.body.toString();

  try {
    await receiver.verify({ signature, body });
  } catch (error) {
    console.log("[qstash] invalid signature", error);
    return res.status(401).json({ message: "Invalid signature" });
  }

  try {
    const { to, subject, html } = JSON.parse(body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: "Hireheaven <no-reply>",
      to,
      subject,
      html,
    });

    console.log(`Mail has been sent to ${to}`);
    res.json({ message: "Mail sent" });
  } catch (error) {
    console.log("Failed to send mail", error);
    res.status(500).json({ message: "Failed to send mail" });
  }
};
