"use server";

import { Resend } from "resend";
import { SubscribedTemplate } from "@/components/subscribe-template";
import type { TSubFormSchema } from "./types";

// Initialize Resend client with API key from environment variables
const resendClient = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(formData: TSubFormSchema) {
  try {
    const { email } = formData;

    const response = await resendClient.emails.send({
      from: "Portifolio <onboarding@resend.dev>",
      to: ["muhirweleoconstantin@gmail.com"],
      subject: "New Subscriber from Portifolio Website",
      react: SubscribedTemplate({ email }) as React.ReactElement,
      replyTo: email,
      tags: [{ name: "source", value: "Website_subscribe" }],
    });

    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
