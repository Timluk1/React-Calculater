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

    // деструктуризация props
    const {
        backgroundColor,
        fontColor,
        typeData,
        typeButton,
        imgPath,
        text,
        isBig,
    } = props;

    // получаем контекст
    const context = useContext(ContextApp);

    // если контекст неопределен, то возвращаем фрагмент
    if (!context) {
        return <></>;
    }

    // из контекста получаем текущий знак и обработчик нажатия кнопки
    const { handleClickButton, sign } = context;

    // формируем класс для правильной стилизации кнопки
    // bc - background-color, fc - color
    // active меняет фон кнопки на более светлый
    // button-big занимает в гриде два элемента вместо одного
    const className: string = `
        button button-bc-${sign === typeButton ? "active-" : ""}${backgroundColor} 
        button-fc-${fontColor} 
        ${isBig ? "button-big" : ""}
    `;
    return (
        <button
            className={className}
            /* если кнопка число, то передаем также значение иначе только тип кнопки*/
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
