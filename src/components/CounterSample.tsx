import { useState } from "react"

type CounterProps = {
    initValue: number
}

const CounterSample = (props: CounterProps):JSX.Element => {
    const {initValue} = props

    const [count, setCount] = useState(initValue)
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
        </div>
    )
}

export default CounterSample