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
      <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.content}({todo.done ? "完了" : "未完了"})</li>
        ))}
      </ul>
    </>
  );
}

export default App;
