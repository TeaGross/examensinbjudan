import { Arrow } from "./Arrow/Arrow"
import { CalendarDays, Clock, MapPin, Martini } from "lucide-react"

export const LevelFour = () => {

    return (
        <>
            <div className="level" id="level-four">
                <h2>DAGS ATT FIRA</h2>
                <div className="text-container">
                    <p>Denna milstolpe vill vi fira med er som hejat på oss längs vägen.

                        <br /> <br />Varmt välkomna på examensfirande!🎉 
                    </p>
                    <div className="invitation-info">
                        <br />
                        <div>
                            <span>
                                <CalendarDays />
                                Datum:</span> 30 maj 2026
                        </div>
                        <div>
                            <span>
                                <Clock />
                                Tid:</span> Öppet hus mellan 14-21 
                        </div>
                        <div>
                            <span>
                                <Martini />
                                Meny:</span> Bakverk & bubbel!
                        </div>
                        <div className="address">
                            <span>
                            <MapPin />                                
                            Plats:</span> 
                            <text><br />Fridensborgsvägen 18 
                            <br />170 69 Solna 
                            <br />(Gångavstånd från Ulriksdal pendeltågsstation) </text>
                        </div>
                    </div>
                </div>
                <Arrow targetId="RSVP-form"/>
            </div>
        </>
    )
}
