import { useRef } from "react";
import { useTodo } from "../hooks/useTodo";

//todoTitleコンポーネント
const TodoTitle = ({ title, as }) => {
  if (as === "h1") return <h1>{title}</h1>;
  if (as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>;
};

//TodoItemコンポーネント
const TodoItem = ({ todo }) => {
  return (
    <li key={todo.id}>
      {todo.content}
      <button>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button>削除</button>
    </li>
  );
};

//TodoListコンポーネント
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

function App() {
  const { todoList, addTodoListItem } = useTodo();

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
      <textarea ref={inputEl} />

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={CompletedList} />
    </>
  );
}

export default App;
