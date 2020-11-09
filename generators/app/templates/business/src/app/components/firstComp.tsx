import React from 'react';

type CallbackTpes<T> = {
    (say: T) : T
}

type Props = {
    Params1: string,
    Params2: number,
    Params3: CallbackTpes<boolean>
}

const FirstCom: React.FC<Props>  = ({Params1, Params2, Params3}): JSX.Element => {

    const show = Params3(true);

    return <div>
       {show && <p> {Params1} is {Params2} now!!! </p> } 
    </div>
}

export default FirstCom;