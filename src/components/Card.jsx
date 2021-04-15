import React, {useState} from 'react';
import { useSpring, animated as a } from 'react-spring';
import { faceArray } from '../data.js';
import '../stylesheets/card.css'

export default function Card() {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      })

    return(
        <div className="card" onClick={() => set(state => !state)}>
            <a.div className="c back" style={{ opacity: opacity.to(o => 1 - o), transform}} />
            <a.div className="c front" style={{ backgroundImage: faceArray[0], opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }} />
        </div>
    )
}