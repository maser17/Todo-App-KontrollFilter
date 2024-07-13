import styled from 'styled-components'

export function TodoHeader() {
    return(
        <> 
            <StyledTodoHeader>
                ToDo-App
            </StyledTodoHeader> 
        </>
    )
}

const StyledTodoHeader = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: blueviolet;
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #bfbcba;
    transistion: all 0.25s ease-out;
    &:hover {
        text-shadow: -16px 6px 15px #E27D60;
    }
`
