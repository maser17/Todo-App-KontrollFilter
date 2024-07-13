import { TodoInputForm } from "../Forms/TodoInputForm"
import { Todo } from "./ToDo"
import styled from "styled-components"

export function TodoPage({todos,setTodos,filteredTodos,setFilteredTodos,filters,currentFilter,setCurrentFilter}) {
    return(
        <>
        <Input>
            <TodoInputForm todos={todos} setTodos={setTodos} filters={filters} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
        </Input>
        <TodoSticker>
            <Todo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} 
              currentFilter={currentFilter}/>
        </TodoSticker>
        </>
    )
}

const Input  = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const TodoSticker  = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`