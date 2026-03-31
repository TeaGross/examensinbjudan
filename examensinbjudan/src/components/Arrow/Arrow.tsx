import "./Arrow.css"
import { ArrowDown } from "lucide-react";

type ArrowProps = {
        targetId: string;
    }

export const Arrow = ({ targetId }: ArrowProps) => {

    const handleClick = () => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

     return (
    <button className="arrow" onClick={handleClick}>
         <ArrowDown size={40} />
    </button>
  );
}