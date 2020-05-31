import React, { useEffect, useState} from 'react'

import { Container, Category, Menu, Pedido, Title, Categories, Items, Total, Input } from './styles'
import api from '../../services/api'


interface Item{
    id: string
    nome: string
    descricao: string
    preco: string
}


interface Category {
    id: string;
    nome: string;
    items: [];
}

interface Pedido{
    item:[],
    quantidade: number
    preco: DoubleRange;
}

const Main: React.FC =() =>{
    const [categories, setCategories] = useState<Category[]>([])
    const [pedido, setPedido] = useState<Pedido[]>([])

    useEffect(() => {
        api.get("/categories").then( info => {
            const ctgs: Category[] = info.data
            ctgs.map( (item: Category, index: number ) =>{
                api.post("/products",{ "category": item.id} ).then( object =>{                    
                    ctgs[index].items= info.data             
                })    
            })
            setCategories(ctgs) 
        })
    },[])

    return (
        <Container>
            <Menu>
                <Title>
                    Categorias
                    <Input>
                        <input />
                    </Input>
                </Title>
                <Categories>
                {
                    
                    categories.map((category) => (
                        <div key={category.id}>
                            <Category> {category.nome} </Category>
                            { console.log(category.items)}
                        </div>                        
                    )      
                    )
                }
                </Categories>
            </Menu>
            <Pedido>
                <Title>
                    Pedido
                </Title>
                <Items>

                </Items>
                <Total></Total>
            </Pedido>
        </Container>
    )
}

export default Main;