import React from 'react'
import Display from './Display'
import Clear from './Clear'
import Numbers from './Numbers'
import Action from './Action'

function Box() {
    const [display, setDisplay] = React.useState([])

    const handleInput = (e) => {
        const buttonValue = e.currentTarget.value
        setDisplay([...display, buttonValue])
    }

    return(
        <div>
            <Display display={display}/>
            <div className="body">
                    <div className="left">
                        <div className="clear">
                            <button>Clear</button>
                        </div>
                        <div className="numbers">
                            <button onClick={handleInput} value="1">1</button>
                            <button onClick={handleInput} value="2">2</button>
                            <button onClick={handleInput} value="3">3</button>
                            <button onClick={handleInput} value="4">4</button>
                            <button onClick={handleInput} value="5">5</button>
                            <button onClick={handleInput} value="6">6</button>
                            <button onClick={handleInput} value="7">7</button>
                            <button onClick={handleInput} value="8">8</button>
                            <button onClick={handleInput} value="9">9</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="action">
                            <button>/</button>
                            <button>-</button>
                            <button>*</button>
                            <button>+</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Box