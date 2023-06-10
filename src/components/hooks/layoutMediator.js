import React, {useState, useEffect, useContext, createContext} from 'react';


export const LayoutMediatorContext = createContext(null);
export const useLayoutMediator = () => useContext(LayoutMediatorContext);

export const LayoutMediatorProvider = ({children}) => {

    const {layout, setLayout} = useState([]);

    return (<LayoutMediatorContext.Provider 
        value={{
            layout            
        }}>

        {children}

    </LayoutMediatorContext.Provider>);
};