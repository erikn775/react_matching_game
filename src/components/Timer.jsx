import React, { useEffect, useState } from 'react';

export default function Timer(){
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);

    useEffect(() => {
        let interval = setInterval(function(){
            setSecond(second + 1)
        }, 1000)
    });

    return(
        <div>
            <h3>Time: {minute}min {second}sec</h3>
        </div>
    )
}