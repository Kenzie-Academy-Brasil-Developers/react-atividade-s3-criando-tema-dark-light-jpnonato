import { createContext, useContext, useState } from "react";

export const ListContext = createContext([])
export const UseList = () => useContext(ListContext)

export const ListProvider = ({children}) =>{

    const [theme, setTheme] = useState('ligth')

    const list = [
        {
            name: 'Ana',
            age: 19,
            country: 'USA'
        },
        {
            name: 'John',
            age: 27,
            country: 'UK'
        },
        {
            name: 'Sakura',
            age: 23,
            country: 'Japan'
        }
    ]

    return(
        <ListContext.Provider value={{list, theme, setTheme}}>
            {children}
        </ListContext.Provider> 
    )
}
