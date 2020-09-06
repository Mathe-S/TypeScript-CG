import { fetchTodosAction, deleteTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodo,
  deleteTodo,
}

export type Action = fetchTodosAction | deleteTodosAction;
