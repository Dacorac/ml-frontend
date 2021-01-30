import React, { useReducer, createContext, useContext } from 'react';

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

const Context = createContext(initialState);
export const useAppContext = () => useContext(Context);
export default Store;