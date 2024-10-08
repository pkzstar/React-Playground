import { useContext } from "react";
import { UserContext } from "./ContextA";


function ContextD() {

    const user = useContext(UserContext);

    return(<div className="box">
        <h1>ContextD</h1>
        <h2>{`Bye ${user}`}</h2>
    </div>
    )}

export default ContextD