import React from 'react';
import ReactDom from 'react-dom';
import Comp from './components/firstComp';
type AppList = {
    greeting: string
}

const App: React.FC<AppList> = ({greeting}): JSX.Element => {

    return <h4>
        {greeting}
        <Comp Params1="constantince" Params2={22} Params3={(say) => {
            return true
        }} />
    </h4>
}


ReactDom.render(<App greeting="Hello World" />, document.getElementById('root'));

