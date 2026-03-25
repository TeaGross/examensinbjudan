import kuvert from "../../assets/kuvert.png"
import "./InvitationCard.css"

export const InvitationCard = () => {

    const handleClick = () => {
        const element = document.getElementById("level-two");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <img src={kuvert} alt="ett kuvert" className="invitation-card" onClick={handleClick}/>
    )
}