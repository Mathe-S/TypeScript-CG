import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTodosAction {
  type: ActionTypes.fetchTodo;
  payload: Todos[];
}

export interface deleteTodosAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "http://jsonplaceholder.typicode.com/todos";

export const deleteTodos = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch<deleteTodosAction>({
      type: ActionTypes.deleteTodo,
      payload: id,
    });
  };
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todos[]>(url);

    dispatch<fetchTodosAction>({
      type: ActionTypes.fetchTodo,
      payload: response.data,
    });
  };
};
