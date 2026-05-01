"use server";

import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../ui/EmailTemplate";
import { Resend } from "resend";
import { request } from "https";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, subject, message, email } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "farohanna@gmail.com",
    subject: subject,
    react: EmailTemplate({
      name,
      email,
      subject,
      message,
    }),
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ id: data?.id }, { status: 200 });
}
