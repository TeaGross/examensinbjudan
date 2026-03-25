import "./InvitationCard.css"

export const InvitationCard = () => {

    const handleClick = () => {
        const element = document.getElementById("level-two");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <img src="/kuvert.png" alt="ett kuvert" className="invitation-card" onClick={handleClick}/>
    )
}