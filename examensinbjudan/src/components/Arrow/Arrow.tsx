import "./Arrow.css"

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
      ↓
    </button>
  );
}