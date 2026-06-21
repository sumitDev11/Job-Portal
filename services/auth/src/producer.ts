import { Client } from "@upstash/qstash";
import dotenv from "dotenv";
dotenv.config();

const qstashClient = new Client({ token: process.env.QSTASH_TOKEN || "" });

export const connectKafka = async () => {
  console.log("✅ QStash client ready");
};

export const publishToTopic = async (topic: string, message: any) => {
  try {
    await qstashClient.publishJSON({
      url: `${process.env.UPLOAD_SERVICE}/api/utils/send-mail`,
      body: message,
    });
    console.log(`[qstash] published message for topic "${topic}"`);
  } catch (error) {
    console.log(`[qstash] failed to publish message for topic "${topic}"`, error);
  }
};

export const disconnectKafka = async () => {};
