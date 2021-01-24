import React from 'react';
import './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

const Search = () => {
    return (
        <Navbar className="navbar justify-content-center col-12">
            <img
                src="/icon/Logo_ML_large.png"
                width="60"
                height="30"
                className="col-1 d-inline-block align-top"
                alt="Logo"
            />
            <Form className="col-9" inline>
                <FormControl type="text" placeholder="Nunca dejes de buscar" className="input-search mr-sm-2" />
                <Button type="button" className="btn-search"><FontAwesomeIcon icon="search" /></Button>
            </Form>
        </Navbar>
    );
}

export default Search;