import { Todo } from "./Todo";

export interface User {
  id?: string;
  email?: string;
  password?: string;
  todoList?: Todo[];
}
export interface AuthResponse {
  token: string;
  user: User;
}
export interface UserDataResponse {
  id: string;
  todoList: Todo[];
}
