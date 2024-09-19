import React, { useContext, useState } from 'react'
import { Context } from './context/TodoContext'
import Modal from './Modal'

function List() {
    const { todos, deleteTodo, updateTodos, complatedTodo } = useContext(Context)
    const [showModal, setShowModal] = useState(false)
    const [updateValue, setUpdateValue] = useState("")
    const [updateId, setUpdateId] = useState(null)

    const handleUpdateBtnClick = (e) =>{
        setShowModal(true)
        setUpdateId(e.target.id)
        const findedData = todos.find(item => item.id == e.target.id)
        setUpdateValue(findedData.title)
    }

    function handleUpdateSubmit(e){
        e.preventDefault()
        updateTodos(updateId,updateValue)
        setShowModal(false)
    }

    const totalTodos = todos.length
    const complatedTodos = todos.filter(todo => todo.isComplated).length
    const unComplatedTodos = todos.filter(todo => !todo.isComplated).length
    
    return (
        <>
        <div className='m-10 space-y-4 w-[450px] mx-auto'>
            <div className='flex items-center justify-between mb-[40px]'>
                <div className='p-2 border-[2px] border-solid border-slate-300 text-[20px] font-bold rounded-lg hover:opacity-60 cursor-pointer'>All({totalTodos})</div>
                <div className='p-2 border-[2px] border-solid border-slate-300 text-[20px] font-bold rounded-lg hover:opacity-60 cursor-pointer'>Complated({complatedTodos})</div>
                <div className='p-2 border-[2px] border-solid border-slate-300 text-[20px] font-bold rounded-lg hover:opacity-60 cursor-pointer'>UnComplated({unComplatedTodos})</div>
            </div>
            {todos.map((item, index) => (
                <div className='w-full' key={index}>
                    <div className={`flex items-center justify-between border-[2px] rounded-lg px-3 py-2 ${item.isComplated ? "opacity-60 line-through" : ""}`}>
                        <p className='text-[20px] text-black'>{item.title}</p>
                        <div className='flex gap-3 items-center'>
                        <div onClick={() => complatedTodo(item.id)} className="w-[20px] relative h-[20px] cursor-pointer rounded-full border-2 border-gray-400 hover:bg-gray-200 transition duration-200">
                        <div className={`absolute inset-[2px] ${item.isComplated ? "bg-blue-500": ""} rounded-full`} ></div>
                        </div>
                            <button id={item.id} onClick={handleUpdateBtnClick} className='p-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-400 duration-300'>Update</button>
                            <button onClick={() => deleteTodo(item.id)} className='p-2 bg-red-600 rounded-md text-white font-semibold hover:bg-red-400 duration-300'>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            <Modal showModal={showModal} setShowModal={setShowModal}>
                    <form onSubmit={handleUpdateSubmit} className='w-full'>
                        <input onChange={(e) => setUpdateValue(e.target.value)} type='text' placeholder='Enter a new todo' className='mt-5 p-2 w-full rounded-md' value={updateValue} />
                        <button type='submit' className='mt-5 bg-green-500 rounded-lg hover:bg-green-700 duration-300 text-white text-[18px] font-semibold p-2 w-full'>Save</button>
                    </form>
            </Modal>
        </div>
        </>
    )
}

export default List