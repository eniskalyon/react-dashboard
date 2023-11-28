import React,{ createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)


    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});
    }
    
    return (
    <StateContext.Provider
    value={{ 
        // activeMenu: activeMenu (if key==value you can omit the latter as so:)
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,

     }}
    >
    {/* always return children inside your context provider */}
    {children}
    </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);