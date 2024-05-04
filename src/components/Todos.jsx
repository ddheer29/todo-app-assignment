import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleComplete } from '../features/todo/todoSlics';
import { MdDeleteOutline } from "react-icons/md";

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    return (
        <>
            <div className='mt-5 font-bold text-2xl'>Your Tasks</div>
            <ul className="list-none flex flex-col justify-center items-center">
                {todos.map((todo) => (
                    <li
                        className={`mt-4 flex justify-between items-center bg-gray-300 px-4 py-2 rounded-lg w-2/3 ${todo.completed ? 'line-through bg-green-200 text-gray-400' : ''}`}
                        key={todo.id}
                    >
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                className="cursor-pointer"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <div className='ml-5'>{todo.text}</div>
                        </div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <MdDeleteOutline size={25} />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos