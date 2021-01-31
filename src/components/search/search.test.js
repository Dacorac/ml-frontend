import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import setSearchTerm from '../../actions/Actions'
import * as Context from '../../store/Store'
import Search from './index'

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));
  
let useAppContextMock;
let dispatchMock;
// Setup mock
beforeEach(() => {
    dispatchMock = jest.fn();
    useAppContextMock = jest.spyOn(Context, "useAppContext").mockReturnValue([{}, dispatchMock]);
});


describe('Input value', () => { 
    it('should update on changes', () => {
         const { queryByPlaceholderText } = render(<Search />)
  
        const searchInput = queryByPlaceholderText('Nunca dejes de buscar')
    
        fireEvent.change(searchInput, { target: { value: 'test' } })
    
        expect(searchInput.value).toBe('test')
    })
    
    
    describe('On search click', () => {

        const termValue = 'test';
    
        beforeEach(() => {
            const { queryByPlaceholderText, container } = render(<Search />)
      
            const searchInput = queryByPlaceholderText('Nunca dejes de buscar')
        
            fireEvent.change(searchInput, { target: { value: termValue } })
    
            const button = container.querySelector('button')
    
            fireEvent.click(button)
        })

        afterEach(() => {
            jest.clearAllMocks()
        })

        it('should dispatch the set term action', () => {
            
            expect(dispatchMock).toBeCalledTimes(1)

            expect(dispatchMock).toBeCalledWith(setSearchTerm(termValue))
        })

        it('should redirect to items page using the assigned query term', () => {
            
    
            expect(mockHistoryPush).toBeCalledTimes(1);

            expect(mockHistoryPush).toBeCalledWith(`/items?search=${termValue}`)
        })
    })
})