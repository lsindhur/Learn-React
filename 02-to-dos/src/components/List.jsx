import React from 'react'
import '../list.css'

const List = ({todos, setTodos,editTodo, setEditTodo}) => {

    const handleDelete = (todo) => {
        setTodos(todos.filter(item => item.id !== todo.id
        ))
    }

    const handleEdit = (todo) => {
        const findTodo = todos.find(item => item.id == todo.id)
        //console.log(findTodo)
        setEditTodo(findTodo)
    }


  return (
    <div>
        {todos.map(todo => (
            <div className='wrapper' key={todo.id}>
            <p>
                {todo.title}
            </p>
            <div>
            <button type='button' onClick={() => handleDelete(todo)}>Delete</button>
            <button type='button' onClick={() => handleEdit(todo)}>Edit</button>
            </div>
            </div>
        
        ))}
    </div>
  )
}

export default List