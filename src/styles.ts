import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body{
        -web-font-smoothing: antialiased;
        width: 100%;
        height: 100%;
    }

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    

    border-style, input, button{
        font-family: 'Verdana', sans-serif;
    }

    #root {
        height: 100%;
        font-family: sans-serif;
        background: black;
        margin: 0 auto;
        padding: 20px 20px;
    }

  button, a{
    cursor: pointer;
  }

`;

export const Container = styled.div`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr 100px;
    grid-template-columns: 100%;
    background: #d3d3d3;  
   
`

