import { useState } from 'react';

import style from '../../public/style/components/elementSidebarCategory.module.css';

export default function ElementSidebarCategory(props){

    const [isExtended, setIsExtended] = useState(false);

    function toggleExtended(){
        setIsExtended(prev => !prev);
    }

    function containerStyle(){
        if(isExtended){
            return {
                height: 350
            };
        }

        return {
            height: 50
        };
    }

    function iconStyle(){
        if(isExtended){
            return {
                transform: 'rotate(90deg)'
            }
        }
    }

    return <div className={style.container} style={containerStyle()}>
        <div className={style.titleContainer} onClick={toggleExtended}>
            <p className={style.title}>{props.title}</p>
            <span className={style.icon} style={iconStyle()}></span>
        </div>

        <div className={style.extendContainer}>
            {props.children}
        </div>
    </div>;
}