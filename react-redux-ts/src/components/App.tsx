import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodos, Todos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todos[];
  fetchTodos: Function;
  deleteTodos: Function;
}

export class _App extends React.Component<AppProps> {
  state = {
    fetching: false,
  };

  componentDidUpdate = (prevState: AppProps) => {
    if (!prevState.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  };

  fetchHandler = () => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todos) => {
      return (
        <div key={todo.id} onClick={() => this.props.deleteTodos(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchHandler}>Fetch</button>
        {this.state.fetching && "LOADING"}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState) => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodos })(_App);
