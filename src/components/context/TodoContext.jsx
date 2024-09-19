import { createContext, useState } from "react";

export const Context = createContext()

export const TodoContext = ({children}) => {
    const [todos, setTodos] = useState([])

    
    function addTodos(body){
        setTodos([...todos, body])
    }
    function deleteTodo(id){
        const deleteIndex = todos.findIndex(item => item.id === id)
        todos.splice(deleteIndex, 1)
        setTodos([...todos])
    }
    function updateTodos(id, newValue){
        const updateData = todos.find(item => item.id == id)
        updateData.title = newValue
        setTodos([...todos])
    }
    function complatedTodo(id){
        const updateData = todos.find(item => item.id == id)
        updateData.isComplated =!updateData.isComplated
        setTodos([...todos])
    }
    return(
        <Context.Provider value={{todos, addTodos, deleteTodo, updateTodos, complatedTodo}}>{children}</Context.Provider>
    )
}