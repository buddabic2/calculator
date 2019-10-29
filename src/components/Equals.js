import React from 'react'

function Equals(props) {
    return(
        <div>
            <button onClick={props.equals}>{props.actionType}</button>
        </div>
    )
}

export default Equals