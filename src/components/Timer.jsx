import React, { useEffect, useState } from 'react';

export default function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
                if(seconds > 58){
                    setMinutes(minutes => minutes + 1)
                    setSeconds(0)
                }
            }, 1000)
        }
        else if(!isActive && seconds !== 0){
            clearInterval(interval)
        }
        return () => clearInterval(interval);
         
    }, [isActive, seconds]);

    return(
        <div>
            <h3>Time: {minutes}min {seconds}sec</h3>
            <button onClick={() => setIsActive(!isActive)}>Start!</button>
        </div>
    )
}