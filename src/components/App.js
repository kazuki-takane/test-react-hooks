import { useRef } from "react";

import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

function App() {
  const { todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
  } = useTodo();

  const inputEl = useRef(null);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const CompletedList = todoList.filter((todo) => {
    return todo.done;
  });

  const handleAddTodoListItem = () => {

    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd
        buttonText="+ TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
      />
      <TodoList
        todoList={CompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
      />
    </>
  );
}

export default App;
