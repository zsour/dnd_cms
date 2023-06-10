import style from '../../public/style/components/elementSidebar.module.css';
import ElementSidebarCategory from './ElementSidebarCategory';
export default function ElementSidebar(){
    return <div className={style.container}>
        <ElementSidebarCategory title="Containers">
        
        </ElementSidebarCategory>
        
        <ElementSidebarCategory title="Images">
            
        </ElementSidebarCategory>
    </div>  
}