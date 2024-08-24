import { createContext, ReactNode, FC, useState } from "react";
import Decimal from "decimal.js";

interface ContextProviderProps {
    children: ReactNode;
}

export interface ValueContext {
    result: string;
    sign: string | undefined;
    handleClickButton: (typeButton: string, number?: number) => void;
}

export const ContextApp = createContext<ValueContext | undefined>(undefined);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
    const [firstNumber, setFirstNumber] = useState<string>("0");
    const [secondNumber, setSecondNumber] = useState<string | undefined>(
        undefined
    );
    const [sign, setSign] = useState<string | undefined>(undefined);
    const [result, setResult] = useState<string>("0");

    // Функция проверки длины строки с числом
    function isCorrectNumber(number: string): boolean {
        return number.length <= 8;
    }

    // Функция обрезки результата, если он превышает 9 символов
    function truncateResult(result: string): string {
        if (result.includes(".")) {
            // Округление с учётом общей длины строки
            if (result.length > 9) {
                const [integerPart, decimalPart] = result.split(".");
                const availableDecimalLength = 8 - integerPart.length; // Общая длина 9 - 1 на запятую - длина целой части

                if (availableDecimalLength > 0) {
                    return integerPart + "." + decimalPart.substring(0, availableDecimalLength);
                } else {
                    return integerPart.substring(0, 8); // Если целая часть длинная, обрезаем её
                }
            }
        } else if (result.length > 9) {
            return "Ошибка"; // Возвращаем ошибку, если число превышает 9 символов без десятичной точки
        }

        return result;
    }

    // Функция вычисления результата
    function calculateResult(
        firstNumber: string,
        secondNumber: string | undefined,
        sign: string | undefined
    ): string {
        const num1 = new Decimal(firstNumber);
        const num2 = secondNumber ? new Decimal(secondNumber) : new Decimal(0);
        let result: Decimal;

        switch (sign) {
            case "plus":
                result = num1.plus(num2);
                break;
            case "minus":
                result = num1.minus(num2);
                break;
            case "multiplication":
                result = num1.times(num2);
                break;
            case "division":
                result = num1.div(num2);
                break;
            default:
                return num1.toString();
        }

        return truncateResult(String(result));
    }

    // Функция обработки нажатия кнопок с числами
    function handleClickNumberButton(number: number): void {
        if (secondNumber === undefined) {
            if (firstNumber === "0" && !firstNumber.includes(".")) {
                setFirstNumber(String(number));
                setResult(String(number));
            } else if (sign) {
                setSecondNumber(String(number));
                setResult(String(number));
            } else {
                if (isCorrectNumber(firstNumber)) {
                    const newValue = firstNumber + String(number);
                    setFirstNumber(newValue);
                    setResult(newValue);
                }
            }
        } else {
            if (isCorrectNumber(secondNumber)) {
                const newValue = (secondNumber ?? "") + String(number);
                setSecondNumber(newValue);
                setResult(newValue);
            }
        }
    }

    // Функции обработки нажатий операций (сложение, вычитание, умножение, деление)
    function handleClickPlusButton(): void {
        if (secondNumber !== undefined) {
            const newNumber = calculateResult(firstNumber, secondNumber, sign);
            if (newNumber === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(newNumber);
                setFirstNumber(newNumber);
                setSecondNumber(undefined);
            }
        }
        setSign("plus");
    }

    function handleClickMinusButton(): void {
        if (secondNumber !== undefined) {
            const newNumber = calculateResult(firstNumber, secondNumber, sign);
            if (newNumber === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(newNumber);
                setFirstNumber(newNumber);
                setSecondNumber(undefined);
            }
        }
        setSign("minus");
    }

    function handleClickMultiplicationButton(): void {
        if (secondNumber !== undefined) {
            const newNumber = calculateResult(firstNumber, secondNumber, sign);
            if (newNumber === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(newNumber);
                setFirstNumber(newNumber);
                setSecondNumber(undefined);
            }
        }
        setSign("multiplication");
    }

    function handleClickDivisionButton(): void {
        if (secondNumber !== undefined) {
            const newNumber = calculateResult(firstNumber, secondNumber, sign);
            if (newNumber === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(newNumber);
                setFirstNumber(newNumber);
                setSecondNumber(undefined);
            }
        }
        setSign("division");
    }

    // Функция обработки нажатия кнопки равенства
    function handleClickEqualButton(): void {
        if (firstNumber !== undefined && secondNumber !== undefined) {
            const newNumber = calculateResult(firstNumber, secondNumber, sign);
            if (newNumber === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(newNumber);
                setFirstNumber(newNumber);
                setSecondNumber(undefined);
                setSign(undefined);
            }
        }
    }

    // Функция обработки нажатия кнопки очистки
    function handleClickClearButton(): void {
        setResult("0");
        setFirstNumber("0");
        setSecondNumber(undefined);
        setSign(undefined);
    }

    // Функция обработки нажатия кнопки процента
    function handleClickProcentButton(): void {
        if (secondNumber !== undefined) {
            const newNum = String(new Decimal(secondNumber).times(0.01));
            const truncatedNum = truncateResult(newNum);
            if (truncatedNum === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(truncatedNum);
                setSecondNumber(truncatedNum);
            }
        } else {
            const newNum = String(new Decimal(firstNumber).times(0.01));
            const truncatedNum = truncateResult(newNum);
            if (truncatedNum === "Ошибка") {
                handleClickClearButton();  // Сбрасываем состояние при ошибке
            } else {
                setResult(truncatedNum);
                setFirstNumber(truncatedNum);
            }
        }
    }

    // Функция обработки нажатия кнопки с запятой
    function handleClickCommaButton(): void {
        if (secondNumber === undefined) {
            if (!firstNumber.includes(".")) {
                const newValue = firstNumber + ".";
                setFirstNumber(newValue);
                setResult(newValue);
            }
        } else {
            if (!secondNumber.includes(".")) {
                const newValue = (secondNumber ?? "") + ".";
                setSecondNumber(newValue);
                setResult(newValue);
            }
        }
    }

    // Функция изменения знака
    function handleChangeSign(): void {
        if (secondNumber !== undefined) {
            const newNum: string = String(-Number(secondNumber));
            setSecondNumber(newNum);
            setResult(newNum);
        } else {
            const newNum: string = String(-Number(firstNumber));
            setFirstNumber(newNum);
            setResult(newNum);
        }
    }

    // Функция для обработки нажатия кнопок
    function handleClickButton(typeButton: string, number?: number): void {
        switch (typeButton) {
            case "number":
                if (number !== undefined) {
                    handleClickNumberButton(number);
                }
                break;
            case "plus":
                handleClickPlusButton();
                break;
            case "minus":
                handleClickMinusButton();
                break;
            case "multiplication":
                handleClickMultiplicationButton();
                break;
            case "changeSign":
                handleChangeSign();
                break;
            case "division":
                handleClickDivisionButton();
                break;
            case "equal":
                handleClickEqualButton();
                break;
            case "clear":
                handleClickClearButton();
                break;
            case "comma":
                handleClickCommaButton();
                break;
            case "procent":
                handleClickProcentButton();
                break;
        }
    }

    return (
        <ContextApp.Provider value={{ result, sign, handleClickButton }}>
            {children}
        </ContextApp.Provider>
    );
};

export default ContextProvider;
