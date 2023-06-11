import React, {useState, useEffect, useContext, createContext} from 'react';

import {v4 as uuid4} from 'uuid';

export const LayoutMediatorContext = createContext(null);
export const useLayoutMediator = () => useContext(LayoutMediatorContext);

export const LayoutMediatorProvider = ({children}) => {

    const [layout, setLayout] = useState([]);
    const [styleRef, setStyleRef] = useState({});
    const [childrenRef, setChildrenRef] = useState({});

    const [renderedLayout, setRenderedLayout] = useState([]);

    function addDiv(){
        let newStyle = {width: "100%", height: 200, backgroundColor: "rgba(0,0,0,0.15)"};
        let children = [];

        let id = uuid4();
                
        let newDiv = {
            id,
            jsx: <div key={id} style={newStyle}>{children}</div>, 
        }

        let tmpLayout = [...layout];
        tmpLayout.push(newDiv);
        setLayout([...tmpLayout]);

        let tmpStyleRef = {...styleRef};
        tmpStyleRef[id] =  {style: newStyle};
        setStyleRef({...tmpStyleRef});

        let tmpChildrenRef = {...childrenRef}
        tmpChildrenRef[id] = {children: children};
        setChildrenRef({...tmpChildrenRef});
    }


    function editDivStyle(id, newStyle){
        let index = null;
        for(let i = 0; i < layout.length; i++){
            console.log(layout[i]);
            if(layout[i].id === id){
                index = i;
                break;
            }
        }

        if(!index) return;

        let tmpLayout = layout;

        let newJsx = <div key={id} style={newStyle} onClick={() => {
            console.log(id);
        }}>{...childrenRef[id].children}</div>;

        console.log(newJsx);

        tmpLayout.splice(i, 1, {id, jsx: newJsx});
        setLayout([...tmpLayout]);

        let tmpStyleRef = {...styleRef};
        tmpStyleRef[id].style = newStyle;
        setStyleRef({...tmpStyleRef});
    }

    function renderLayout(){
        let jsx = [];        
        for(let i = 0; i < layout.length; i++){
            jsx.push(layout[i].jsx);
        }

        setRenderedLayout([...jsx]);
    }


    useEffect(() => {
        console.log(childrenRef);
        renderLayout();
    }, [styleRef, childrenRef]);


    return (<LayoutMediatorContext.Provider 
        value={{
            addDiv,
            renderedLayout
        }}>

        {children}

    </LayoutMediatorContext.Provider>);
};