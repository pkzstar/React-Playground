//ObjectUpdate.jsx
import { useState } from "react";

function ObjectUpdate() {


    const [car, setCar] = useState({year:2017,
                                    make: "Chevy", 
                                    model: "Bolt"});

        function handleYearChange(event){
            setCar(c => ({...c, year: event.target.value}));
        }
        function handleMakeChange(event){
            setCar(c => ({...c, make: event.target.value}));
        }
        function handleModelChange(event){
            setCar(c => ({...c, model: event.target.value}));
        }


    return(
    <>
    <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

    <input type="number" value={car.year} onChange={handleYearChange}/> <br></br>
    <input type="text" value={car.make} onChange={handleMakeChange}/> <br></br>
    <input type="text" value={car.model} onChange={handleModelChange}/> <br></br>
    </>);
}

export default ObjectUpdate