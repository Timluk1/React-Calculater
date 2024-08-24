import { ContextApp } from "../../context/context";
import { useContext } from "react";
import "./Button.scss";

interface Props {
    backgroundColor: "gray" | "orange" | "white";
    fontColor: "white" | "black";
    typeData: "img" | "text";
    typeButton: string;
    isBig: boolean;
    imgPath?: string;
    text?: string;
}

function Button(props: Props) {
    const {
        backgroundColor,
        fontColor,
        typeData,
        typeButton,
        imgPath,
        text,
        isBig,
    } = props;

    const context = useContext(ContextApp);
    if (!context) {
        return <></>;
    }

    const { handleClickButton, sign } = context;

    const className: string = `
        button button-bc-${sign === typeButton ? "active-" : ""}${backgroundColor} 
        button-fc-${fontColor} 
        ${isBig ? "button-big" : ""}
    `;
    return (
        <button
            className={className}
            onClick={() => typeButton === "number" ? handleClickButton(typeButton, Number(text)) : handleClickButton(typeButton)}
        >
            {typeData === "img" && imgPath ? (
                <img src={imgPath} alt={typeButton} />
            ) : (
                text
            )}
        </button>
    );
}

export default Button;
