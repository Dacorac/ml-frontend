import React, { useReducer, createContext } from 'react';

import SearchReducer from '../reducers/SearchReducer'


const initialState = {searchTerm : ''};

const Store = ({children}) => {

    const [state, dispatch] = useReducer(SearchReducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
} 

export const Context = createContext(initialState);
export default Store;