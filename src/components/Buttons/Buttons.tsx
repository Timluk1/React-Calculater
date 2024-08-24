import Button from "../Button/Button.tsx";
import "./Buttons.scss";

function Buttons() {
    return (
        <div className="buttons">
            <Button
                backgroundColor="white"
                fontColor="black"
                typeData="img"
                typeButton="clear"
                isBig={false}
                text="AC"
                imgPath="/icons/Clear.svg"
            />
            <Button
                backgroundColor="white"
                fontColor="black"
                typeData="img"
                typeButton="changeSign"
                isBig={false}
                imgPath="/icons/ChangeSign.svg"
            />
            <Button
                backgroundColor="white"
                fontColor="black"
                typeData="img"
                typeButton="procent"
                isBig={false}
                imgPath="/icons/Procent.svg"
            />
            <Button
                backgroundColor="orange"
                fontColor="black"
                typeData="img"
                typeButton="division"
                isBig={false}
                imgPath="/icons/Division.svg"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="7"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="8"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="9"
            />
            <Button
                backgroundColor="orange"
                fontColor="black"
                typeData="img"
                typeButton="multiplication"
                isBig={false}
                imgPath="/icons/Multiplication.png"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="4"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="5"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="6"
            />
            <Button
                backgroundColor="orange"
                fontColor="black"
                typeData="img"
                typeButton="minus"
                isBig={false}
                imgPath="/icons/Minus.svg"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="1"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="2"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={false}
                text="3"
            />
            <Button
                backgroundColor="orange"
                fontColor="black"
                typeData="img"
                typeButton="plus"
                isBig={false}
                imgPath="/icons/Plus.svg"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="number"
                isBig={true}
                text="0"
            />
            <Button
                backgroundColor="gray"
                fontColor="white"
                typeData="text"
                typeButton="comma"
                isBig={false}
                text=","
            />
            <Button
                backgroundColor="orange"
                fontColor="black"
                typeData="img"
                typeButton="equal"
                isBig={false}
                imgPath="/icons/Equal.svg"
            />
        </div>
    );
}

export default Buttons;
