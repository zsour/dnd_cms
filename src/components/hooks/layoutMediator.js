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
        if(!styleRef[id] || !childrenRef[id]) return;
        
        let tmpStyleRef =  {...styleRef[id].style};

        for(let s in newStyle){
            tmpStyleRef[s] = newStyle[s];
        }


        let newJsx = <div key={id} style={tmpStyleRef}>{...childrenRef[id].children}</div>;

        let tmpLayout = layout;
        for(let i = 0; i < tmpLayout.length; i++){
            if(tmpLayout[i].id == id){
                let newLayoutRef = {id, jsx: newJsx};
                tmpLayout.splice(i, 1, {...newLayoutRef});
                break;
            }
        }
        
        setLayout([...tmpLayout]);

        let tmpStyleRefList = {...styleRef};
        tmpStyleRefList[id].style = {...tmpStyleRef};
        setStyleRef({...tmpStyleRefList});
    }

    function renderLayout(){
        let jsx = [];        
        for(let i = 0; i < layout.length; i++){
            jsx.push(layout[i].jsx);
        }

        setRenderedLayout([...jsx]);
    }


    useEffect(() => {
        console.log(layout);
        renderLayout();
    }, [layout, styleRef, childrenRef]);


    return (<LayoutMediatorContext.Provider 
        value={{
            editDivStyle,
            addDiv,
            renderedLayout
        }}>

        {children}

    </LayoutMediatorContext.Provider>);
};