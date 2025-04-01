const TodoData = (props) => {
    const todoList = props.todoList;
    const deleteTodo = props.deleteTodo;
    console.log(todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item) => {
                return <div key={item.id}><div>{item.name}</div>
                    <div><button onClick={() => deleteTodo(item.id)}>Delete</button></div>
                </div>
            })}
        </div>
    );
}
export default TodoData;