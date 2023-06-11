import { useElementSidebarMediator } from './hooks/elementSidebarMediator';

import style from '../../public/style/components/elementSidebarItem.module.css';

export default function ElementSidebarItem(props){

    const ESM = useElementSidebarMediator(); 
    
    function iconStyle(){
        if(props.icon && props.icon.src){
            return {
                backgroundImage: `url('${props.icon.src}')`
            };
        }
    }

    return <div className={style.container} onClick={props.onClick}>
        <span className={style.icon} style={{...iconStyle(), backgroundSize: "80%"}}></span>
        <div className={style.titleContainer}>
            <p className={style.title}>{props.title}</p>
        </div>
    </div>;
}