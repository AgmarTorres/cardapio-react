import styled from 'styled-components'

export const Container  = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;      
    padding: 20px;
`

export const Category = styled.div`
    font-family: "Verdana";
    font-size: 20px;
    border-bottom: 1px solid;
    padding: 10px;
`

export const Item = styled.div`

`

export const Menu = styled.div`
    overflow-y: scroll;
`

export const Pedido = styled.div`
    overflow-y: scroll;
    `

export const Title = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
`
export const Categories = styled.div``
export const Items = styled.div``
export const Total = styled.div`
    background: red;
    `
export const Input = styled.div`
    text-align: right;
    width: 100%;
    padding-right: 40px;
    input{
        border-radius: 10px;
        height: 30px;
    }
`
