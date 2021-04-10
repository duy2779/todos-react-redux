import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux'
import { setCheck }  from '../features/todoSlice'

function TodoItem({item}) {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(item.id))
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={item.done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={ item.done ? 'todoItem--done': undefined}>{item.item}</p>
        </div>
    )
}

export default TodoItem
