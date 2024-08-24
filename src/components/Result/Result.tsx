import { ContextApp } from "../../context/context";
import { useContext } from "react";
import "./Result.scss";

function Result() {
    const context = useContext(ContextApp);
    
    if (!context) {
      return <></>
    }

    const { result } = context;
    return (
        <div className="result-box">
            <p className="result-text">{result}</p>
        </div>
    );
}

export default Result;
