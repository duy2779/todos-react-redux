import React from 'react'
import './Tools.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useDispatch, useSelector } from 'react-redux'
import { setAllDoneUndone } from '../features/todoSlice'
import { selectAllDone } from '../features/todoSlice'
import { 
    visibilityFilters,
    setVisibilityFilter, 
    selectFilter 
} from '../features/filterSlice'


function Tools() {
    const dispatch = useDispatch()
    const onCheckAllClicked = () => {
        dispatch(setAllDoneUndone())
    }

    const allDone = useSelector(selectAllDone)
    const filter = useSelector(selectFilter)

    return (
        <div className="tools__container">
            <span className={ allDone ? 'check_all checked' : 'check_all'}>
                <ExpandMoreIcon onClick={ onCheckAllClicked }/>
            </span>
            <ul className="tools">
                <li className="">
                    <p 
                    className={ filter === visibilityFilters.SHOW_ALL ? 'selected filter' : 'filter' } 
                    onClick={() => dispatch(setVisibilityFilter(visibilityFilters.SHOW_ALL))}
                    >
                        All
                    </p>
                </li>
                <li className="">
                    <p className={ filter === visibilityFilters.SHOW_ACTIVE ? 'selected filter' : 'filter' } 
                    onClick={() => dispatch(setVisibilityFilter(visibilityFilters.SHOW_ACTIVE))}>Active</p>
                </li>
                <li className="">
                    <p className={ filter === visibilityFilters.SHOW_COMPLETED ? 'selected filter' : 'filter' }
                    onClick={() => dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED))}>Complete</p>
                </li>
            </ul>
        </div>
    )
}

export default Tools
