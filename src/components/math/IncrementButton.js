import { useState } from "react";

export default function IncrementButton() {
    
    const [counter, setCounter] = useState(0);

    function incrementer() {
        alert("Incrementer");
        let counterCopy = counter;
        counterCopy++;
        setCounter(counterCopy);
        console.log(counterCopy);
    }

   

    return (
        <div>
            <h1>IncrementButton</h1>
            <p>Je suis un IncrementButton : {counter}</p>
            <button onClick={incrementer}>Increment</button>
        </div>
    );
}