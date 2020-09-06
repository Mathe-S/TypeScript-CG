import { Todos, Action, ActionTypes } from "../actions";

export const TodosReducer = (state: Todos[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodo:
      return action.payload;

    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
