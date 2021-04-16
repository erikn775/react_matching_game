import React from 'react';
import { SideNav } from './StyledBar.jsx'
import Timer from './Timer.jsx'
import MovesCounter from './MovesCounter.jsx'

export default function SideBar(){
    return(
        <SideNav>
            <h1>Doggy Doubles</h1>
            <Timer/>
            <MovesCounter/>
        </SideNav>
    )
}