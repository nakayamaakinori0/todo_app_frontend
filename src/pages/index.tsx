import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get("http://localhost:3001/todos");
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo?.id}>{todo?.task}</li>
        ))}
      </ul>
    </div>
  );
}
