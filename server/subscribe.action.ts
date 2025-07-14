'use server';

import { Resend } from 'resend';
import { SubscribedEmailTemplate } from '@/components/subscribe-template';
import type { TSubFormSchema } from './types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(formData: TSubFormSchema) {
  try {
    const { email } = formData;

    const response = await resend.emails.send({
      from: 'Leo <onboarding@resend.dev>',
      to: ['muhirweleoconstantin@gmail.com'],
      subject: 'New Subscriber from Portifolio Website',
      react: SubscribedEmailTemplate({ email }),
      replyTo: email,
    });
    if (response.error) {
      return { success: false, error: response.error };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
