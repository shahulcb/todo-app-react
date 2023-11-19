import React from "react";

export default function Filter() {
    return (
        <select className="select w-32 mt-5">
            <option selected>All Tasks</option>
            <option>Pending</option>
            <option>Completed</option>
        </select>
    )
}