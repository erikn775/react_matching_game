import React, { useState } from 'react';

export default function Timer(){
    const [state, setState] = useState({minute: 0, second: 0})


    return(
        <div>
            <h3>Time: {state.minute}min {state.second}sec</h3>
        </div>
    )
}