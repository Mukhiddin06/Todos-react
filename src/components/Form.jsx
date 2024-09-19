
import React, { useContext, useRef } from 'react'
import { Context } from './context/TodoContext'

function Form() {
    const { addTodos, todos} = useContext(Context)
    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodos({id:todos.length + 1, title:inputRef.current.value})
        e.target.reset()
    }
  return (
    <form onSubmit={handleSubmit} className='w-[450px] m-10 mx-auto'>
        <input ref={inputRef} className='p-2 rounded-md w-[80%] border-[2px] border-slate-300' type="text" placeholder='Enter todo' required/>
        <button className='p-2 rounded-md w-[20%] text-[18px] bg-green-500 text-white font-semibold'>Add</button>
    </form>
  )
}

export default Form