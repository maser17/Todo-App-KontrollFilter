import styled from "styled-components"
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

export function TodoCard({title, done, id,todos,setTodos}) {
    ///console.log("TodoCard")
    function handleDeleteOnClick() {
        setTodos(todos.filter(todo => {
            return( todo.id !== id
        )})

        )
    }

    function handleToggleOnClick() {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }

            return todo;
        }))
    }

    return (

        
        
        <StyledTodoContainer done={done}>
            <TodoText done={done}>{title.toUpperCase()}</TodoText>
            <br></br>
            <CiCircleCheck onClick={handleToggleOnClick}/>
            <FaRegTrashAlt onClick={handleDeleteOnClick} />
        </StyledTodoContainer>
    )
}

const TodoText  = styled.p`
    display: inline;
`

const StyledTodoContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif,
    color: #41B3A3;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 5px;
    color: ${props => props.done ? "green" : "red"};
    textDecoration: ${props => props.done ? "line-through" : "none"};
    margin: 20px auto;
    font-family: 'Lato';
    background:#666;
    
    
    
    margin:0;
    padding:0;


    font-weight: bold;
    font-size: 2rem;


    font-size: 1rem;
    font-weight: normal;


    list-style:none;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    background:rgb(187, 114, 190);
    display:block;
    height:7em;
    width:7em;
    padding:1em;

    margin:1em;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
    font-family: 'Reenie Beanie';
    font-size: 2rem;
     &:hover {
        box-shadow:10px 10px 7px rgba(0,0,0,.7);
        transform: scale(1.25);
        position:relative;
        z-index:5;
    }
`