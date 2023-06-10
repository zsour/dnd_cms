import style from '../../public/style/components/elementSidebarItem.module.css';

export default function ElementSidebarItem(props){

    console.log(props.icon);

    function iconStyle(){
        if(props.icon && props.icon.src){
            return {
                backgroundImage: `url('${props.icon.src}')`
            };
        }
    }

    return <div className={style.container}>
        <span className={style.icon} style={{...iconStyle(), backgroundSize: "80%"}}></span>
        <div className={style.titleContainer}>
            <p className={style.title}>{props.title}</p>
        </div>
    </div>;
}