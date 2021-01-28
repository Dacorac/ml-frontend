import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";

import { Context } from '../../store/Store'
import SetSearchTerm from '../../actions/Actions'

import { Navbar, FormControl, Button, Container } from 'react-bootstrap'
import './search.css'

const Search = () => {
    
    const [state, dispatch] = useContext(Context);
    const [term, setTerm] = useState('')
    
    let history = useHistory();
    
    const handleInputChange = (e) => setTerm(e.target.value);

    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch(SetSearchTerm(term));
        history.push(`/items?search=${term}`);
    }

    return (
        <Container>
            <Navbar className="bg-color-yellow justify-content-center col-12">
                <img
                    src="/icon/Logo_ML_large.png"
                    width="60"
                    height="30"
                    className="col-1 d-inline-block align-top"
                    alt="Logo"
                />
                <FormControl type="text" placeholder="Nunca dejes de buscar" 
                    className="input-search border-color-gray-2 mr-sm-2"
                    onChange={handleInputChange} value={term} />
                <Button onClick={handleButtonClick}>Search</Button>
            </Navbar>
        </Container>
    );
}

export default Search;