import { useState, useEffect } from "react";

function Effect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
            window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED")

    return () => {
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTENER REMOVED")
    }
    }, [])

    useEffect(() => {
        document.title = `size: ${width} x ${height }`;
    }, [width, height]);



    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

return(<>
<p>Window Width: {width}px</p>
<p>Window Height: {height}px</p>
</>)

    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState("green")

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;

    //     return () => {

    //     }
    // }, [count, color]);

    // function addCount() {
    //     setCount(c => c + 1);
    // }

    // function subCount() {
    //     setCount(c => c - 1);
    // }

    // function changeColor() {
    //     setColor(c => c === "green" ? "red" : "green")
    // }
    // return(<>
    // <p style={{color: color}}>Count: {count}</p>
    // <button onClick={addCount}>Add</button>
    // <button onClick={subCount}>Subtract</button><br />
    // <button onClick={changeColor}>Color Change</button>
    // </>)
}

export default Effect