import React from 'react'

function Modal({children, setShowModal, showModal}) {
  return (
    <div onClick={(e) => e.target.id == "wrapper" ? setShowModal(false) : setShowModal(true)} id="wrapper" className={`fixed top-0 bottom-0 left-0 right-0 duration-300 backdrop-blur ${showModal ? "" : "scale-0"}`}>
        <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-[450px] h-[200px] bg-slate-300 border-[2px] border-solid border-slate-300 rounded-lg p-4'>
            {children}
        </div>
    </div>
  )
}

export default Modal