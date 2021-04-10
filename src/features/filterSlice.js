import { createSlice, createSelector } from '@reduxjs/toolkit'
import { selectTodoList } from './todoSlice'

export const visibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: visibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilter: (state ,action) => {
            return action.payload
        }
    }
}); 

export const selectFilter = state => state.filter

export const visibleTodos = createSelector(
    [selectTodoList, selectFilter],
    (todos, filter) => {
        switch(filter){
            case visibilityFilters.SHOW_ALL:
                return todos
            case visibilityFilters.SHOW_ACTIVE:
                return todos.filter(item => item.done===false)
            case visibilityFilters.SHOW_COMPLETED:
                return todos.filter(item => item.done===true)
            default:
                return todos
        }
    }
)

export const {
    setVisibilityFilter
} = filterSlice.actions

export default filterSlice.reducer