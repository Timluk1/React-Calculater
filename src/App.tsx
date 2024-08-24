import Buttons from "./components/Buttons/Buttons";
import Result from "./components/Result/Result";
import "./App.scss";

function App() {
    return (
        <div className="calculator">
            <Result />
            <Buttons />
        </div>
    );
}

export default App;
