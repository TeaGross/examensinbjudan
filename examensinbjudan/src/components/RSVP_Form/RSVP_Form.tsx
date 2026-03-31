import { useState } from "react";
import emailjs from "emailjs-com";
import { ConfirmationMessage } from "../ConfirmationMessage";

export const RSVP_Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isComing, setIsComing] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true)

    emailjs.send(
      "service_igjp2e8",      // <-- din Service ID
      "template_yytfutl",     // <-- din Template ID
      {
        name: name,
        message: message,
        isComing: isComing
      },
      "2_qLWdKeoZIavt7c8"    // <-- din Public Key
    )
    .then(() => {
      setName("");
      setMessage("");
      setIsComing("")
    })
    .catch((error) => {
      console.error(error);
      alert("Något gick fel! Hör av dig till Karin eller Tea och OSA till dom direkt.");
    });
    };

  return (
    <div className="level" id="RSVP-form">
      <h2>VI SES SNART</h2>
      
      {isSubmitted ? (
        <ConfirmationMessage/>
      ) : (
      <form onSubmit={handleSubmit} className="text-container">
        <input
          type="text"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Allergier / meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="radio-group">
            <label>
                Ja, jag kommer
                <input type="radio" name="rsvp" checked={isComing === "Ja"} value="Ja"
                onChange={(e) => setIsComing(e.target.value)}
                />
            </label>
            <label>
                Nej, jag kan tyvärr inte
                <input type="radio" name="rsvp" checked={isComing === "Nej"} value="Nej"
                onChange={(e) => setIsComing(e.target.value)}
                />
            </label>
        </div>
        <button type="submit">OSA</button>
      </form>
      )
    }
    </div>
  );
};