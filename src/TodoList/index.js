import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.totalTodos && props.onEmptyTodos()}
        {!!props.totalTodos &&
          !props.searchedTodos.length &&
          props.onEmptySearchedTodos(props.searchText)}
        {props.searchedTodos.map(props.render || props.children)}
      </ul>
    </section>
  );
}

export { TodoList };
