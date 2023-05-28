import axios from "axios";
import { useEffect, useState } from "react";

const todoDataUrl = "http://localhost:3100/todos";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);

      setTodoList(response.data);
    };

    fetchData();
  }, []);

  console.log("TODOリスト:", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了TODOリスト:", inCompletedList);

  const CompletedList = todoList.filter((todo) => {
    return todo.done;
  });

  console.log("完了TODOリスト:", CompletedList);

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />

      <button>+ TODOを追加</button>
      <h2>未完了TODOリスト</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button>削除</button>
          </li>
        ))}
      </ul>
      <h2>完了TODOリスト</h2>
      <ul>
        {CompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
