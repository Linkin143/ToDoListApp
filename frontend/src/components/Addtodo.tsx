import React, { FormEvent, useState } from "react";
import { useTodos } from "../store/todo";

const Addtodo: React.FC = () => {
    const [todo, setTodo] = useState("")
    const  {handleAddToDo} = useTodos();

    const handleformSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("")
    }


    return (
        <form onSubmit={handleformSubmit}>
            <input type="text" placeholder="Type your task here" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add</button>

        </form>
    )
}

export default Addtodo