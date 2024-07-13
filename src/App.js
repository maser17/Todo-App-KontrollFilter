import "./App.css";
import { TodoHeader } from "./components/Header/TodoHeader";
import { TodoCard } from "./components/Cards/TodoCard";
import { initialTodos } from "./data/initialToDos.js";
import { useState } from "react";
import { useEffect } from "react";
import { TodoPage } from "./components/Main/ToDoPage.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        console.error("Failed to parse todos from local storage", e);
        return initialTodos;
      }
    } else {
      return initialTodos;
    }
  });

  const [filteredTodos,setFilteredTodos] = useState([]);
  const [filters,setFilters] = useState([]);
  const [currentFilter,setCurrentFilter] = useState(["all"]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const uniqueCategories = new Set(todos.map((todo) => todo.category));
    console.log(filters);
    setFilters(["all", ...Array.from(uniqueCategories)]);
    console.log(filters);
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(
      currentFilter === "all"
        ? todos
        : todos.filter((todo) => todo.category === currentFilter)
    );
  }, [currentFilter, todos]);

  /*function useTime() {
    const [time,setTime] = useTime(new Date())
    const timeId = setInterval(
      () => setTime(time),
      1000,
    );

    return () => clearInterval(timeId);

  }*/

  return (
    <div className="app">
      <BrowserRouter>
        <div className="heading">
          <Link to="/todos" style={{ textDecoration: "none" }}>
            <TodoHeader />
          </Link>
        </div>
        <div className="appBody">
          <Routes>
            <Route
              path="/todos"
              element={
              <TodoPage 
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
              filters={filters}
              setFilters={setFilters}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              />}
            />
            <Route path="/:dumyDaten" element={<TodoCard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;