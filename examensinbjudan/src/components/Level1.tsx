import { Arrow } from "./Arrow/Arrow"
import { Button } from "./Button/Button"
import { InvitationCard } from "./InvitationCard/InvitationCard"

export const  Level1 = () => {

    return (
        <div className="level">
            <div className="text-container">
                <InvitationCard></InvitationCard>
                <p>Du har fått en inbjudan!</p>
                <Button targetId="level-two"/>
            </div>
            <Arrow targetId="level-two"/>
        </div>
    )
}