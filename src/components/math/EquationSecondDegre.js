import { useEffect, useState } from "react";

export default function EquationSecondDegre() {

    const [a, setA] = useState(2);
    const [b, setB] = useState(4);
    const [c, setC] = useState(4);
    const [delta, setDelta] = useState(0);

    function calculerDelta() {
        let deltaCopy = b * b - 4 * a * c;
        setDelta(deltaCopy);
    }

    useEffect(() => {
        calculerDelta();
    }, []);

    useEffect(() => {
        calculerDelta();
    }, [a, b, c]);

    function tester($e) {
        console.log($e);
        alert('je suis exécutée !');
    }

    return (
        <div>
            <h1>EquationSecondDegre</h1>
            <p>Je suis un EquationSecondDegre : {delta}</p>
            <p>Je suis un EquationSecondDegre : {a}</p>
            <p>Je suis un EquationSecondDegre : {b}</p>
            <p>Je suis un EquationSecondDegre : {c}</p>
            <button onClick={() => setA(a + 1)}>Increment A</button>
            <button onClick={() => setB(b + 1)}>Increment B</button>
            <button onClick={() => setC(c + 1)}>Increment C</button>
            <button onClick={($e)=>tester($e)}>Test</button>
        </div>
    );


}