import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json(
      { error: "Email e mensagem são obrigatórios." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Enviar e-mail
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: "Mensagem do portfolio",
      text: message,
      html: `<p>Você recebeu uma nova mensagem de: ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json(
      { message: "E-mail enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return NextResponse.json(
      { error: "Falha ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
