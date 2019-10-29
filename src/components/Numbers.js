import React from 'react'

function Number(props){
    return(
        <div>
            <button onClick={props.handleInput} value={props.value}>{props.value}</button>
        </div>
    )
}
export default Number