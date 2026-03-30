import { useState } from "react";
import './RSVP_Form.css'
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
      <div className="text-container">
        
        <p>
          Vi hoppas att ni vill komma och fira med oss! <br /> <br />
          OSA senast 17/5 och meddela gärna om ni har några allergier.         
        </p>

        <form onSubmit={handleSubmit} className="rsvp-form">
          <label htmlFor="">
          Namn
          <input
            type="text"
            placeholder="Namn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
          </label>

          <label>
            Meddelande
          <textarea
            placeholder="Allergier eller övrig information"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input"
          />

          </label>

          <div className="radio-group">
              <label>
                  <input type="radio" name="rsvp" checked={isComing === "Ja"} value="Ja"
                  onChange={(e) => setIsComing(e.target.value)}
                  />
                  Ja, jag kommer
              </label>
              <label>
                  <input type="radio" name="rsvp" checked={isComing === "Nej"} value="Nej"
                  onChange={(e) => setIsComing(e.target.value)}
                  />
                  Nej, jag kan tyvärr inte
              </label>
          </div>

          <div>
            <button className="btn" type="submit">OSA</button>
          </div>
        </form>
      </div>
    </div>
  );
};