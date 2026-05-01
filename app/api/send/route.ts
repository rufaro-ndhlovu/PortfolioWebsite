import { EmailTemplate } from "../../ui/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, subject, message, email } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "farohanna@gmail.com",
      subject: subject || "New contact form message",
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
  } catch (err) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
