import "./Button.css"

type ButtonProps = {
        targetId: string;
    }

export const Button = ({ targetId }: ButtonProps) => {

    const handleClick = () => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button className="btn" onClick={handleClick}>Klicka mig!</button>
    )
}