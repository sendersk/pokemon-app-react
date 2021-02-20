import React from 'react'
import {Wrapper} from "./styled"

function PokemonItem({title, content}) {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <div>{content}</div>
        </Wrapper>
    )
}

export default PokemonItem
