export default function TodoCard(props) {
    // eslint-disable-next-line react/prop-types
    const {children, handleDeleteTodos, index, handleEditTodos} = props;
    return (
        <li>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodos(index)
                }
                }><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => {
                    handleDeleteTodos(index)
                }
                }><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </li>
    )
}