import React from 'react';
import bucket from '../assets/images/bucket.png';

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
        <img src={bucket} />
       {show ? <p> {Params1} is {Params2} now!!! </p> : null } 
    </div>
}

export default FirstCom;