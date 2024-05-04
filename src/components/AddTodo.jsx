import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlics';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-0 mt-12">
            <input
                type="text"
                className="bg-gray-200 rounded-l-lg  outline-none text-gray-900 py-2 w-1/3 px-5 text-lg"
                placeholder="Enter your Tasks..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-green-500 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-r-lg text-lg"
            >
                Add Task
            </button>
        </form>
    )
}

export default AddTodo