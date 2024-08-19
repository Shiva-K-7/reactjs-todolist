
import FindLargestWord from "./FindLargestWord.jsx";

export default function TodoInput(props) {
    // eslint-disable-next-line react/prop-types
    const {handleAddTodos, todoValue, setTodoValue, inputValue, setInputValue, handleInput} = props
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
                setInputValue(e.target.value)
            }} placeholder="Enter todo.."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                handleInput(inputValue)
                // setInputValue(todoValue) for answer after add
                setTodoValue('')
            }
            }>Add
            </button>
            <FindLargestWord inputValue={inputValue} handleInput={handleInput}/>
        </header>
    )
}