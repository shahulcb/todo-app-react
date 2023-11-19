import React from "react";
import Form from "./Form";
import TodoLis from "./TodoList";
import Filter from "./Filter"

export default function Todo() {

    return (
        <div className="md:max-w-lg max-w-sm p-5 rounded-lg mx-auto mt-10 bg-base-200">
            <Form />
            <Filter />
            <TodoLis />
        </div>
    )
}