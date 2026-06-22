import { Receiver } from "@upstash/qstash";
import axios from "axios";
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
    console.log(`[mail] attempting to send to "${to}" subject "${subject}"`);

    await axios.post(
      "https://api.resend.com/emails",
      {
        from: "HireHeaven <onboarding@resend.dev>",
        to,
        subject,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log(`Mail has been sent to ${to}`);
    res.json({ message: "Mail sent" });
  } catch (error: any) {
    console.log("Failed to send mail", error?.response?.data || error.message);
    res.status(500).json({ message: "Failed to send mail" });
  }
};
