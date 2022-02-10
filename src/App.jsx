import TodoList from "./components/TodoList.jsx";
import TodoInput from "./components/TodoInput.jsx";
import {useEffect, useState} from "react";

function App() {

    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState('')

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({todos: newList}))
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleDeleteTodos(index) {
        const newTodoList = todos.filter((todos, todoIndex) => {
            return todoIndex !== index
        })
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleEditTodos(index) {
        const valueToEdit = todos[index]
        setTodoValue(valueToEdit)
        handleDeleteTodos(index)
    }

    useEffect(() => {
        if (!localStorage) {
            return
        }
        let localTodos = localStorage.getItem('todos')
        if (!localTodos) {
            return
        }
        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
    }, [])

return (
    <>
        <main></main>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
)
}

export default App
