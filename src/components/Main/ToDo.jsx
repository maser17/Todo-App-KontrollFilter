import { TodoCard } from "../Cards/TodoCard";
import { Fragment } from "react";

export function Todo({todos,setTodos,currentFilter,filteredTodos}) {
    return(
        <>
        { currentFilter !== "all"
                ? filteredTodos.map((todo) => {
              return (
                <Fragment key={todo.id}>
                  <TodoCard
                    title={todo.title}
                    done={todo.done}
                    id={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </Fragment>
              );
            })
          : todos.map((todo) => {
            return (
            <Fragment key={todo.id}>
                <TodoCard
                title={todo.title}
                done={todo.done}
                id={todo.id}
                todos={todos}
                setTodos={setTodos}
                />
            </Fragment>
            )
        })
    }
        </>
    )
}