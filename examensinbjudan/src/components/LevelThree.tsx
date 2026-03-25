import { Arrow } from "./Arrow/Arrow"

export const LevelThree = () => {

    return (
        <>
            <div className="level" id="level-three">
                <h2>UPPDRAG SLUTFÖRT</h2>
                <div className="text-container">
                    <p>Efter otaliga timmar av blod, svett och kodande 
                        har Karin och Tea slutfört sin programmeringsutbildning
                        och kan nu kalla sig för... <br /> FRONT END DEVELOPERS! 
                        <br /> Alltså: Professionella <br />Bip-boppare!</p>
                </div>
                <Arrow targetId="level-four"/>
            </div>
        </>
    )
}
