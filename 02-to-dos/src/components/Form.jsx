import React from 'react'
import { useEffect } from 'react'

const Form = ({input, setInput, setTodos, todos, editTodo, setEditTodo}) => {

    const updateItem = (title, id, completed) => {
         const newTodos = todos.map(todo=> 
            todo.id == id? {title,id,completed} : todo
        )
        console.log(newTodos)
        setTodos(newTodos)
        setEditTodo('')  
    };

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title)
        } else {
            setInput('')
        }
    },[editTodo])

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    function onSubmitHandler (e) {
        e.preventDefault()
        if(!editTodo) {
            setTodos([...todos,{id:Date.now(),title:input,completed:false}])
        //console.log(todos)
        setInput("")
        } else {
            updateItem(input, editTodo.id, editTodo.completed)
        }
        
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
        <input type='text' 
        required
        value = {input} //we are assigning the input state to value because value can be set to empty after the submit action and input area can be cleared
        onChange={onChangeHandler}
        ></input>
        <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default Form