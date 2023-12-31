import React from "react";

export default function Form(props) {
    return (
        <form className="w-full flex gap-4" onSubmit={(event) => props.handleFormSubmit(event)}>
            <input type="text" placeholder="Type here" className="input input-bordered w-full flex-1" onChange={(event) => props.handleInput(event)} value={props.input} required />
            <button className="btn btn-square btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                </svg>
            </button>
        </form>
    )
}