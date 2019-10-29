import React from 'react'
import Display from './Display'
import Clear from './Clear'
import Number from './Numbers'
import Action from './Action'

function Box() {
    const [display, setDisplay] = React.useState([])

    const handleInput = (e) => {
        const buttonValue = e.currentTarget.value
        setDisplay([...display, buttonValue])
        console.log(display)
    }

    const clearDisplay = () => {
        setDisplay([])
    }

    return(
        <div>
            <Display display={display}/>
            <div className="body">
                    <div className="left">
                        <div className="clear">
                            <Clear clearDisplay={clearDisplay}/>
                        </div>
                        <div className="numbers">
                            <Number handleInput={handleInput} value={1}/>
                            <Number handleInput={handleInput} value={2}/>
                            <Number handleInput={handleInput} value={3}/>
                            <Number handleInput={handleInput} value={4}/>
                            <Number handleInput={handleInput} value={5}/>
                            <Number handleInput={handleInput} value={6}/>
                            <Number handleInput={handleInput} value={7}/>
                            <Number handleInput={handleInput} value={8}/>
                            <Number handleInput={handleInput} value={9}/>
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