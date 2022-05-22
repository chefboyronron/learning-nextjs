import styled from "styled-components";

const Title = styled.h1`
    font-size: 50px;
    color: ${
        ({ theme }) => theme.colors.primary
    }
`

function CSSJS() {
    // JS inline style
    // return <h2 style={{color: 'red'}}>Hello Style</h2>
    return <Title>Styled Components</Title>
}

export default CSSJS;

/**
 * Note: JS Inline style is not good approach
 */