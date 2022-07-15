import PropTypes from 'prop-types'
import { useState } from 'react'

const CounterApp = ({value}) => {

    const [counter,setCounter] = useState(value);

    const handleAdd = () =>{

        setCounter( x => x+1)
    }
    const handleRed = () =>{

        setCounter( x => x-1)
    }
    const reset = () =>{setCounter(0)}

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRed}>-1</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;