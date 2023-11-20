import React from "react"

export default function TodoList(props) {

    return (
        <>
            {props.todoList.map((value, index) => {
                return (
                    <div className="px-5 py-4 bg-base-300 rounded-lg mt-5 flex gap-3 items-center" key={index} >
                        <div className="form-control">
                            <input type="checkbox" className="checkbox checkbox-success" checked={value.isComplete} onChange={() => props.handleCheckBox(value.id)} />
                        </div>
                        {
                            value.isComplete ?
                                <p className="flex-1 line-through text-gray-700">{value.input}</p> :
                                <p className="flex-1">{value.input}</p>
                        }
                        <button className="btn px-2 min-h-[40px] h-[40px] btn-error" onClick={() => props.deleteTodoList(value.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div >
                )
            })}
        </>
    )
}