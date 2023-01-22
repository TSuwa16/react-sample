import React from 'react'

interface IContainerProps {
    title: string,
    children: React.ReactElement
}

const Container = (props: IContainerProps): JSX.Element => {

    const {title, children} = props

    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="Hello">
            <p>this is blue</p>
        </Container>
    )
}

export default Parent