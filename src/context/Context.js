import React, { useReducer, createContext, useContext } from 'react'
import {menuArray} from '../Data'
import { cartReducer } from './Reducers';

const Cart = createContext();

export const Context = ({children}) => {
    const products = menuArray;

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    })

    console.log(state)
    
    return(
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart)
}
