import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.searchedTodos.length && props.onEmptyTodos()}
        {props.searchedTodos.map((todo) => props.render(todo))}
      </ul>
    </section>
  );
}

export { TodoList };
