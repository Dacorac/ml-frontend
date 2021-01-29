import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";

import { Context } from '../../store/Store'
import SetSearchTerm from '../../actions/Actions'

import { Navbar, FormControl, Button, Form } from 'react-bootstrap'
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
        <Navbar className="bg-color-yellow justify-content-center col-12">
            <img
                src="/icon/Logo_ML_large.png"
                width="60"
                height="30"
                className="col-1 d-inline-block align-top"
                alt="Logo"
            />
            <Form className="col-9" inline>
                <FormControl type="text" placeholder="Nunca dejes de buscar" 
                    className="input-search border-color-gray-2"
                    onChange={handleInputChange} value={term} />
                <Button className="btn-search bg-color-gray-1 border-color-gray-2" onClick={handleButtonClick}>
                    <img width="24" height="24" src="/icon/search_icon.png" alt="search" />
                </Button>
            </Form>
        </Navbar>
    );
}

export default Search;