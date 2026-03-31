import { Arrow } from "./Arrow/Arrow"

export const LevelTwo = () => {

    return (
        <>
            <div className="level" id="level-two">
                <h2>ETT NYTT ÄVENTYR</h2>
                <div className="text-container">
                    <p> Det var en höstdag 2024 när Karin och Tea gav sig ut på ett stort äventyr.
                        <br /><br />Målet? Byta bana och bli programmerare. 
                        
                        <br /><br/> Ja ni vet - såna där som sitter
                        vid datorer och "bip-boppar" som vi kallade det.</p>
                </div>
                <Arrow targetId="level-three"/>
            </div>
        </>
    )
}