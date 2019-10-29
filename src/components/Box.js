import React from 'react'
import Display from './Display'
import Clear from './Clear'
import Number from './Numbers'
import Action from './Action'
import Equals from './Equals'
import * as math from 'mathjs'

function Box() {
    const [display, setDisplay] = React.useState([])
    const [firstEntry, setFirstEntry] = React.useState(0)
    const [secondEntry, setSecondEntry] = React.useState(0)
    const [actionToOutput, setActionToOutput] = React.useState()
    const [output, setOutput] = React.useState()

    const handleInput = (e) => {
        const buttonValue = e.currentTarget.value
        setDisplay([...display, buttonValue])
        // console.log(display)
    }

    const clearDisplay = () => {
        setDisplay([])
    }

    const add = () => {
        let number = display.join('')
        setFirstEntry(number)
        setActionToOutput('add')
        setDisplay([])
    }

    const equals = () => {
        let number = display.join('')
        setSecondEntry(number)
        let one = firstEntry
        let two = secondEntry
        if(actionToOutput === 'add'){
            setOutput(one+two)
        }
        setDisplay([output])
    }

    return(
        <div>
            <Display display={display}/>
            <div className="body">
                    <div className="left">
                        <div className="clear">
                            <Clear clearDisplay={clearDisplay}/>
                            <Equals equals={equals} actionType={'='}/>
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
                            <Action actionType={'/'}/>
                            <Action actionType={'-'}/>
                            <Action actionType={'*'}/>
                            <Action action={add} actionType={'+'}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Box