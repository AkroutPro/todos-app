import { User } from "../models/User";
import { Todo } from "../models/Todo";

export type DeleteTodoResponse = {
  success: boolean;
  message?: string;
};
export const deleteTodo = async (
  todoId: string
): Promise<DeleteTodoResponse> => {
  return new Promise<DeleteTodoResponse>((resolve) => {
    const mockedUserData = JSON.parse(
      <string>localStorage.getItem("mockedUserData")
    );
    setTimeout(() => {
      localStorage.setItem(
        "mockedUserData",
        JSON.stringify({
          ...mockedUserData,
          todoList: [...mockedUserData.todoList].filter(
            (todo) => todo.id !== todoId
          ),
        })
      );
      resolve({
        success: true,
        message: `Todo with ID ${todoId} has been deleted.`,
      });
    }, 1000);
  });
};
export const addTodo = async (todo: Todo): Promise<DeleteTodoResponse> => {
  return new Promise<DeleteTodoResponse>((resolve) => {
    const mockedUserData = JSON.parse(
      <string>localStorage.getItem("mockedUserData")
    );
    setTimeout(() => {
      localStorage.setItem(
        "mockedUserData",
        JSON.stringify({
          ...mockedUserData,
          todoList: [...mockedUserData.todoList, { ...todo, id: todo.name }],
        })
      );
      resolve({
        success: true,
        message: `Todo has been added.`,
      });
    }, 1000);
  });
};
