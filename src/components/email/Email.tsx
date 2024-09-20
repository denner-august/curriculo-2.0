// components/ContactForm.js
"use client";
import { useState } from "react";

import { EmailForm } from "./styles";

export function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Chamada para a API de envio de e-mail
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("E-mail enviado com sucesso!");
      } else {
        setResponseMessage("Falha ao enviar o e-mail: " + data.error);
      }
    } catch (error) {
      setResponseMessage("Ocorreu um erro ao enviar o e-mail.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EmailForm onSubmit={handleSubmit} className="Email">
      <h1>Me mande uma mensagem</h1>
      <div>
        <label htmlFor="email">Seu email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="message"> Sua mensagem:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {responseMessage && <p>{responseMessage}</p>}
    </EmailForm>
  );
}
