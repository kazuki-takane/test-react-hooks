import { useRef } from "react";
import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

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
    <Container centerContent p={{base: "4", md: "6"}} maxWidth="3xl">
      <TodoTitle title="TODO進捗管理" as="h1" fontSize={{base: "2xl", md: "3xl"}} />
      <TodoAdd
        buttonText="TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
        placeholder="ADD TODO"
        leftIcon={<AddIcon />} />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
        fontSize={{base: "xl", md: "2xl"}}
      />
      <TodoList
        todoList={CompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
        fontSize={{base: "xl", md: "2xl"}}
      />
      </Container>
    </>
  );
}

export default App;
