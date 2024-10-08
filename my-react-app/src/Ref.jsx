import { useEffect, useRef } from "react";

function Ref() {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)


const ref = useRef(0);
    useEffect(() => {
        console.log("Hello");
    });

    function handleClick1() {
         ref.current++
        console.log(ref.current)
        inputRef1.current.style.backgroundColor = "cyan"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""


    }

    function handleClick2() {
        ref.current++
       console.log(ref.current)
       inputRef2.current.style.backgroundColor = "pink"
       inputRef1.current.style.backgroundColor = ""
       inputRef3.current.style.backgroundColor = ""
   }

   function handleClick3() {
    ref.current++
   console.log(ref.current)
   inputRef2.current.style.backgroundColor = ""
   inputRef1.current.style.backgroundColor = ""
   inputRef3.current.style.backgroundColor = "palegreen"
}

    return (
    <>
        <button onClick={handleClick1}>
        Click me 1!
    </button>
    <input ref={inputRef1} />

    <button onClick={handleClick2}>
        Click me 2!
    </button>
    <input ref={inputRef2} />

    <button onClick={handleClick3}>
        Click me 3!
    </button>
    <input ref={inputRef3} />
    </>
    )
}

export default Ref;