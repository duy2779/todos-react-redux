import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import Tools from './components/Tools'

import { useSelector } from 'react-redux'
import { visibleTodos } from './features/filterSlice'

function App() {
  const todoList = useSelector(visibleTodos)
  return (
    <div className="App">
      <div className="app__container">
        <Tools />
        <div className="app__todoContainer">
          {
            todoList.map((item, index) =>(
              <TodoItem item={item} key={index}/>
            ))
          }
        </div>

        <Input/>
      </div>
    </div>
  );
}

export default App;
