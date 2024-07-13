import styled from "styled-components"
import { TodoInput } from "../Input/TodoInput"
import { CategorySelect } from "../Input/CategorySelect";
import {useRef} from "react";
import {v4 as uuidv4} from "uuid";

export function TodoInputForm(setCurrentFilter,currentFilter,filters,setFilters,todos,setTodos) {
    console.log(filters)
    const formRef = useRef();
    function newTodo() {
        const newCategoryValue = formRef.current.chooseCategory.value.toLowerCase();
        const newTitleValue = formRef.current.inputTodo.value.toLowerCase();
        if (formRef.current.inputTodo.value !== "" && formRef.current.chooseCategory.value !== "") {
            setTodos([
                ...todos,
                {
                    title:newTitleValue,
                    id:uuidv4(),
                    done:false,
                    category: newCategoryValue
                }
            ]
    
            )
        }
        formRef.current.inputTodo.value = ""; 
    }

    function handleCurrentFilter() {
        setCurrentFilter(formRef.current.categorySelect.value);
    }

    function handleOnClickSubmit(e) {
        e.preventDefault();
        newTodo();
    }
        
    return(
        <form ref={formRef} onSubmit={handleOnClickSubmit}>
            <StyledFormDiv multiple={false}>
                <TodoInput></TodoInput>
                <input type="text" name="chooseCategory"></input>
            </StyledFormDiv>
            <StyledFormDiv>
                <CategorySelect handleCurrentFilter={handleCurrentFilter} filters={filters} currentFilter={currentFilter}></CategorySelect>
                <input type="submit" name="submit" value="submit"></input>
            </StyledFormDiv>    
        </form>

    )
}

const StyledFormDiv = styled.div`
    display: flex;
    gap: ${props => props.multiple ? "10px" : "0px"}

`