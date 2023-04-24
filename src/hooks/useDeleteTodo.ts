import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, DeleteTodoResponse } from "../services/TodosService";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: async (id) => deleteTodo(id),
    onSuccess: (deleteTodoResponse: DeleteTodoResponse) => {
      queryClient.invalidateQueries("userData");
      console.log(deleteTodoResponse.message);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteTodo: mutate, isLoading, isSuccess, isError };
};
