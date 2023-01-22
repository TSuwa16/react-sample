import * as React from 'react';

const TitleContext = React.createContext('');

const Title = (): JSX.Element => {

    const title = React.useContext(TitleContext)

    return (
        // <TitleContext.Consumer>
        //     {(title) => {
        //         return <h1>{title}</h1>
        //     }}
        // </TitleContext.Consumer>
        <h1>{title}</h1>
    )
}

const Header = (): JSX.Element => {
    return (
        <div>
            <Title />
        </div>
    )
}

const Page = (): JSX.Element => {
    const title = 'React Test'

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page