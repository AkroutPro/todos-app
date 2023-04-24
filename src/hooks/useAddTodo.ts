import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../services/TodosService";
import { Todo } from "../models/Todo";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: async (todo: Todo) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries("userData");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { addTodo: mutate, isLoading, isSuccess, isError };
};
