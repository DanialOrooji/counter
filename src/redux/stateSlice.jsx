import React from 'react'

export default function stateReducer(state = 0, action) {
    console.log(action);
    switch (action.type) {
        case 'todos/todoAdded':
            console.log(state);
            return state+1
        case 'todos/Minus':
            if (state == 0) {
                return state
            }
            console.log(state);
            return state-1
            
        case 'todos/todoDeleted':
            console.log(state);
            return state=0
        default:
            return state
    }
}
export const todoAdded = () => ({
    type: 'todos/todoAdded'
})

export const todoMinus = () => ({
    type: 'todos/todoMinus'
})

export const todoDeleted = () => ({
    type: 'todos/todoDeleted'
})

