import { useState } from "react";
import "./xalpabets.css";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function AlphabetsScreen() {
    const [text, setText] = useState("");

    const handleClick = (char) => {
        setText((prev) => prev + char);
    };

    const handleBackspace = () => {
        setText((prev) => prev.slice(0, -1));
    };

    return (
        <div className="container">
            <h1>Alphabet Buttons</h1>
            <p>Click letters (or use your keyboard) to build text.</p>

            {/* Output */}
            <div className="output">
                {text || "Your text will appear here..."}
            </div>

            {/* Backspace */}
            <button onClick={handleBackspace}>Backspace</button>

            {/* Alphabet Keys */}
            <div className="keys">
                {alphabets.map((char) => (
                    <button
                        key={char}
                        className="key"
                        onClick={() => handleClick(char)}
                    >
                        {char}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AlphabetsScreen;
