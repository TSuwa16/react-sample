import { useReducer, useState } from "react"

type CounterProps = {
    initValue: number
}

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'DECREMENT':
            return currentCount - 1;
        case 'INCREMENT':
            return currentCount + 1;
        case 'DOUBLE':
            return currentCount * 2;
        case 'RESET':
            return 0;
        default:
            return currentCount
    }
}

const CounterReducerSample = (props: CounterProps):JSX.Element => {
    const {initValue} = props

    const [count, dispatch] = useReducer(reducer, initValue)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('DOUBLE')}>*</button>
            <button onClick={() => dispatch('RESET')}>RESET</button>
        </div>
    )
}

export default CounterReducerSample