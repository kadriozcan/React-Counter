import React, { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [totalCount, setTotalCount] = useState(0)

    function incrementTotalCount(by) {
        setTotalCount(totalCount + by)
    }

    function decrementTotalCount(by) {
        setTotalCount(totalCount - by)
    }

    function resetTotalCount() {
        setTotalCount(0)
    }

    return (
        <>
            <span className='totalCount'>{totalCount}</span>
            <CounterButton by={1} incrementMethod={incrementTotalCount} decrementMethod={decrementTotalCount} />
            <CounterButton by={2} incrementMethod={incrementTotalCount} decrementMethod={decrementTotalCount} />
            <CounterButton by={5} incrementMethod={incrementTotalCount} decrementMethod={decrementTotalCount} />
            <button className='resetButton' onClick={resetTotalCount}>Reset</button>
        </>
    )
}



