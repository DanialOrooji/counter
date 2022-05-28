import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import selectTodos  from '../redux/stateSlice'


export default function Counter() {
    const dispatch = useDispatch()
    function handleReset(){
        dispatch({type:'todos/todoDeleted'})
    }
    function handlePlus(){
        dispatch({type:'todos/todoAdded'})
    }
    function handleMinus(){
        dispatch({type:'todos/todoMinus'})
    }
    // const number = useSelector(selectTodos)
    // console.log(number);
    return (
        <div className='bg-black flex items-center justify-center h-full '>
            <div className='flex flex-col w-1/3'>
                <div className='text-3xl text-yellow-600 basis-1/3 py-8 text-center'>Counter</div>
                <div className='basis-1/3 py-8 text-yellow-600 text-center text-3xl'>
                    
                </div>
                <div className='basis-1/3 flex md:flex-row flex-col justify-between py-8 '>
                    <button className='bg-yellow-600 px-2 py-1 md:mb-0 mb-2 rounded-xl' onClick={handleReset}>
                        reset
                    </button>
                    <button className='bg-yellow-600 px-5 py-1 rounded-xl md:mb-0 mb-2' onClick={handleMinus}>
                        -
                    </button>
                    <button className='bg-yellow-600 px-5 py-1 rounded-xl md:mb-0 mb-2' onClick={handlePlus}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}
