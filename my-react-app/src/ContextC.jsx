import ContextD from "./ContextD"
import { useContext } from "react"
import { UserContext } from "./ContextA"

function ContextC() {

    const user = useContext(UserContext);
    return(<div className="box">
        <h1>ContextC</h1>
        <h2>{`Hello again ${user}`}</h2>
        <ContextD />
    </div>
    )}

export default ContextC