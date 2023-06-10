import React, {useState, useEffect, useContext, createContext} from 'react';


export const ElementSidebarMediatorContext = createContext(null);
export const useElementSidebarMediator = () => useContext(ElementSidebarMediatorContext);

export const ElementSidebarMediatorProvider = ({children}) => {



    return (<ElementSidebarMediatorContext.Provider 
        value={{
            
        }}>

        {children}

    </ElementSidebarMediatorContext.Provider>);
};