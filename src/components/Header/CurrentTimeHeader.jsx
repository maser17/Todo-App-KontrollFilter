import styled from 'styled-components'

export function CurrentTimeHeader ({time}) {
    <StyledCurrentTimeHeader>
        {time}
    </StyledCurrentTimeHeader>
}

const StyledCurrentTimeHeader = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: blueviolet;
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #bfbcba;
    transistion: all 0.25s ease-out;
`