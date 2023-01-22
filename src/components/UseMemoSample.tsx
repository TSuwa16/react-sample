import { memo, useCallback, useState } from "react"
import * as React from 'react';


type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {

    const {isFizz} = props
    console.log(`Fizz is rerendered, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
}

const Buzz = memo<BuzzProps> ((props) => {

    const {isBuzz} = props
    console.log(`Buzz is rerendered, isBuzz=${isBuzz}`)
    return <span>{isBuzz ? 'Buzz' : ''}</span>
})

type ButtonProps = {
    onclick: () => void
}

const DoubleButton = React.memo((props: ButtonProps) => {

    const {onclick} = props

    console.log('DoubleButton is rerendered')

    return <button onClick={onclick}>DoubleButton</button>
})

export const UseMemoSample = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`Parent is rerendered, count=${count}`)
    
    const double = useCallback(
      () => {
        setCount(prev => prev * 2)
      },
      [],
    )
    

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount((prevValue) => prevValue + 1)}>+1</button>
            <DoubleButton onclick={double} />
            <Fizz isFizz={isFizz} />
            <Buzz isBuzz={isBuzz} />
        </div>
    )
}