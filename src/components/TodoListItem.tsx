import { Todo } from "../models/Todo";
import React from "react";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
type TodoListItemProps = {
  data: Todo;
};
const TodoListItem = React.memo(({ data }: TodoListItemProps) => {
  const { deleteTodo, isLoading } = useDeleteTodo();
  const handleDeleteTodo = () => {
    deleteTodo(data?.id);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <h1>{data?.name}</h1>
      <button
        className="bg-red-500 text-white font-bold ml-5 py-2 px-2 rounded focus:outline-none focus:shadow-outline"
        onClick={handleDeleteTodo}
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
});
export default TodoListItem;
