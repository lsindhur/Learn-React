import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

function App() {

const [input, setInput] = useState("")
const [todos, setTodos] = useState([])
const [editTodo, setEditTodo] = useState(null)

  return (
    <>
      <div>
        <Header />
        <Form input={input} setInput={setInput} setTodos={setTodos} todos={todos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        <List todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
      </div>
      
    </>
  )
}

export default App
