import { useState } from "react";
//import emailjs from "emailjs-com";

export const RSVP_Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isComing, setIsComing] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, message, isComing)

//     emailjs.send(
//       "service_igjp2e8",      // <-- din Service ID
//       "template_yytfutl",     // <-- din Template ID
//       {
//         name: name,
//         message: message,
//         isComing: isComing
//       },
//       "2_qLWdKeoZIavt7c8"    // <-- din Public Key
//     )
//     .then(() => {
//       alert("Tack! Din anmälan är skickad 🎉");
//       setName("");
//       setMessage("");
//       setIsComing("")
//     })
//     .catch((error) => {
//       console.error(error);
//       alert("Något gick fel 😬");
//     });
    };

  return (
    <div className="level" id="RSVP-form">
      <h2>VI SES SNART</h2>

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
    </div>
  );
};