import { combineReducers } from "redux";
import { TodosReducer } from "./TodosReducer";
import { Todos } from "../actions";

export interface StoreState {
  todos: Todos[];
}

export const reducer = combineReducers<StoreState>({
  todos: TodosReducer,
});
