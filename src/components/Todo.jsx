import './Todo.css'

//Third step accept 
function Todo({title, onTodoDelete}) {
    return (
    <div className='todo'>
        <p>{title}</p>
        //Last step activate 
        <button onClick={onTodoDelete}>Delete</button>
    </div>
    )
}

export default Todo
