import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTodo, removeTodo } from "../redux/notes/todoSlice";
import { RootState } from "../redux/store"
import '../index.css'



const Todo: React.FC = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  const handleRemoveTodo = (index: number) => {
    dispatch(removeTodo(index));
  };

  return (
    <>
    <div className="flex w-max mx-auto m-4 justify-items-center ">
      <input
        className=" shadow-sm p-4 rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
        placeholder="digita...."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      { todo? (
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded ml-4 font-bold"
       onClick={handleAddTodo}>NOTA</button>
      ) : ("")
    }
    </div>
    <div className="flex flex-col justify-around w-max mx-auto m-2">
    <ul>
        {todos.map((todo:string, index:number) => (
          <li 
          key={index}
          className="m-4 ">
            {todo}
            <button 
            className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={() => handleRemoveTodo(index)}
            >Elimina</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Todo;