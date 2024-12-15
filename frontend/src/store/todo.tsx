import { createContext, ReactNode, useContext, useState } from "react";

export type TodoProviderProps = {
    children: ReactNode
}


export type Todo = {
    id: String;
    task: String;
    completed: Boolean;
    createdAt: Date;

}

export type TodosContext = {
    todos: Todo[];
    handleAddToDo: (task: String) => void;
    toggletodoasCompleted: (id:String) => void;
    handleDelete: (id:String)=> void;
}

export const todoContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>(() =>{
        try {
            const newTodos = localStorage.getItem('todos') || "[]"
            return JSON.parse(newTodos) as Todo[]; 
        } catch (error) {
            console.log(error)
            return [];
        }
    })


    const handleAddToDo = (task: String) => {

        setTodos((prev) => {


            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date(),





            },
            ...prev
            ]
            console.log("my previous data :" + prev)
            console.log(newTodos);

            //Local Storage

            localStorage.setItem("todos", JSON.stringify(newTodos))

            return newTodos
        })
    }

    //Mark completed

    const toggletodoasCompleted = (id: String) =>{
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {

                    return (
                        {... todo, completed: !todo.completed}
                    )

                }else{
                    return todo;
                }

            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }

// Delete the task

const handleDelete = (id: String) =>{
setTodos((prev)=>{
    let newUpdatedTodos= prev.filter((filterTodo)=> filterTodo.id !== id)
    localStorage.setItem("todos", JSON.stringify(newUpdatedTodos))
    return newUpdatedTodos;
})
}

    return <todoContext.Provider value={{ todos, handleAddToDo, toggletodoasCompleted , handleDelete}}>
        {children}
    </todoContext.Provider>
}

//consumer

export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if (!todosConsumer) {
        throw new Error("useTodos used outside of provider");

    }
    return todosConsumer;
}


