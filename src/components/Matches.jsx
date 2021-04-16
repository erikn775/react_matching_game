import React, {useState} from 'react';

export default function Matches(){
    const [matches, setMatches] = useState(0);

    return(
        <div>
            <h3>Matched: {matches}/12</h3>
        </div>
    )
}