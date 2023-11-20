import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";


export default function Todo() {
    const [input, setInput] = React.useState('')
    const [todoList, setTodoList] = React.useState([])

    function handleInput(event) {
        setInput(event.target.value)
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        setTodoList((prevTodoList) => [...prevTodoList, { id: new Date().getTime(), input: input, isComplete: false }])
        setInput('')
    }
    function handleCheckBox(id) {
        setTodoList(todoList.filter((element) => {
            if (element.id === id) {
                element.isComplete = !element.isComplete
            }
            return element
        }))
    }

    function deleteTodoList(id) {
        setTodoList(todoList.filter((element) => element.id !== id))
    }



    return (
        <div className="md:max-w-lg max-w-sm p-5 rounded-lg mx-auto mt-10 bg-base-200">
            <Form handleInput={handleInput} input={input} todoList={todoList} handleFormSubmit={handleFormSubmit} />
            <TodoList todoList={todoList} handleCheckBox={handleCheckBox} deleteTodoList={deleteTodoList} />
        </div>
    )
}