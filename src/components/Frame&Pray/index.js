import React, { useState } from "react";
import {useTransition, animated} from 'react-spring';

function FramePray() {

    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    return transitions.map(({ item, key, props }) => 
    item
    ? <animated.div style={props}>😄</animated.div>
    : <animated.div style={props}>🤪</animated.div>
    )

}

export default FramePray;