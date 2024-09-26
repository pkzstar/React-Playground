// MyComponent
import React, {useState} from "react"

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Pikachu")
    }

    const incrementAge = () => {
        setAge(age + 10);
    }

    const ToggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={ToggleEmployedStatus}>Toggle Status</button>
    </div>)
}

export default MyComponent