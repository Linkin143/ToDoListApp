import { useSearchParams } from "react-router";
import { Todo, useTodos } from "../store/todo";

const Todos:React.FC = () => {
    const { todos, toggletodoasCompleted, handleDelete } = useTodos();
    

    const [searchParams] = useSearchParams();
    let todosDatahere = searchParams.get("todo");
    console.log("Data " ,todosDatahere)
    let filterData = todos;

if (todosDatahere==="active"){
    filterData= filterData.filter((task)=> !task.completed)

} 

if (todosDatahere==="completed"){
    filterData= filterData.filter((task)=> task.completed)

} 

    return (
        <ul className="main-task">
            {
                filterData.map((todo: Todo) => {
                    return (
                        <li key={todo.id as React.Key}>
                            <input type="checkbox" id={`todo-${todo.id}`} checked={!!todo.completed} onClick={() => toggletodoasCompleted(todo.id)} />
                            <label htmlFor={`todo-${todo.id}`} >{todo.task}</label>

                            {
                                todo.completed && (
                                    <button type="button" onClick={() => handleDelete(todo.id)}>
                                        Delete
                                    </button>
                                )
                            }

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Todos