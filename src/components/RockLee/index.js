import React, { useState } from "react";
import {useTransition, animated} from 'react-spring';

function RockLee() {
    const [show, set] = useState(false)
    const transitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    return transitions.map(({ item, key, props }) =>
    item && <animated.div key={key} style={props}>✌️</animated.div>
    )
}

export default RockLee;