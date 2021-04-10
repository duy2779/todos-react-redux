import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
        {
            item: 'Hang out with gf',
            done: false,
            id : '1212121'
        },
        {
            item: 'Feed dog',
            done: false,
            id : '34555'
        },
        {
            item: 'Pratice code',
            done: true,
            id : '87218'
        }
    ],
    allDone: false
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheck: (state, action) => {
            for(const item of state.todoList) {
                if(action.payload === item.id){
                    item.done = !item.done
                }
            }
            if(checkAllDone(state) === true){
                state.allDone = true
            }else{
                state.allDone = false
            }
        },
        setAllDoneUndone: (state, action) => {
            for(const item of state.todoList) {
                item.done = !state.allDone
            }
            state.allDone = !state.allDone
        },
    }
});

const checkAllDone = (state) => {
    for(const item of state.todoList){
        if(item.done === false){
            return false
        }
    }
    return true
}

export const { saveTodo, setCheck, setAllDoneUndone } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList
export const selectAllDone = state => state.todos.allDone

export default todoSlice.reducer