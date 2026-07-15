import { CounterNumber, CounterButton } from "../styles";

export const Counter = () => {
    return (
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
            <CounterButton>+</CounterButton>
            <CounterNumber>0</CounterNumber>
            <CounterButton>-</CounterButton>
        </div>
    )
}



export default Counter;