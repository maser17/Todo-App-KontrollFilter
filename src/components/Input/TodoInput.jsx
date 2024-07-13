import styled from 'styled-components'
import { FaCheck } from "react-icons/fa";
import { useRef } from 'react';
import {v4 as uuidv4} from "uuid"
export function TodoInput({todos,setTodos}) {
    /*const inputHook = useRef();

    

        inputHook.current.value = "";
    

    function handleOnKeyPress(e) {
        if (e.code === "Enter") {
            newTodo();
        }
    }


    function handleOnTodo() {
        newTodo();
    }*/
    return (
        <StyledTodoInputContainer>
            <input name="inputTodo"></input>
        </StyledTodoInputContainer>
        
    )
}

const StyledTodoInputContainer = styled.div`
    display: flex;
    gap: 10px;
`