import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { User } from "../models/User";
import TodoListItem from "./TodoListItem";
import { useAddTodo } from "../hooks/useAddTodo";
import { Todo } from "../models/Todo";
export default function TodoList() {
  const { user }: User = useContext(AuthContext);
  const [newTodo, setNewTodo] = useState<Todo>({ name: "" });
  const { addTodo, isLoading } = useAddTodo();
  const displayTodosList = () => {
    return user?.todoList.map((todo) => {
      return <TodoListItem key={todo.id} data={todo} />;
    });
  };
  const handleAddTodo = () => {
    addTodo(newTodo);
  };
  return (
    <div className="w-full mt-10 border border-gray-300 p-4">
      <div className="flex justify-center items-center mt-5">
        <input
          type="text"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ name: e.target.value })}
          className="border border-gray-300 p-2 rounded-l-lg"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          disabled={isLoading || newTodo.name.length === 0}
        >
          {isLoading ? "Adding..." : "Add Todo"}
        </button>
      </div>
      {displayTodosList()}
    </div>
  );
}
