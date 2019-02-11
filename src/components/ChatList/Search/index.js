import React from 'react';
import {
    Container,
    Icon,
    Input,
    Label,
} from './style';

const Search = (props) => {
    return (
        <Container>
            <Icon>search</Icon>
            <Label>
                <Input
                    placeholder="Buscar o empezar un chat nuevo"
                />
            </Label>
        </Container>
    )
}

export default Search;