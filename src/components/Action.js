import React from 'react'

function Action(props){
    return (
        <div>
            <button onClick={props.action}>{props.actionType}</button>
        </div>
    )
}

export default Action