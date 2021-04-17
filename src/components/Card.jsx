import React, {useState} from 'react';
import { useSpring, animated as a } from 'react-spring';
import { faceArray } from '../data.js';
import '../stylesheets/card.css'
import { useSelector, useDispatch } from 'react-redux';

export default function Card(props) {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      })

    // const counter = useSelector(state => console.log(state));
    // const dispatch = useDispatch();

    // const handleClick = () => {
    //     set(state => !state);
    //     dispatch({type: "FLIP"});
    // }

    return(
        <div className={props.class} onClick={() => set(state => !state)}>
            <a.div className="c back" style={{ opacity: opacity.to(o => 1 - o), transform}} />
            <a.div className="c front" style={{ backgroundImage: props.image, opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }} />
        </div>
    )
}