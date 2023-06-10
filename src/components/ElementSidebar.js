import style from '../../public/style/components/elementSidebar.module.css';
import ElementSidebarCategory from './ElementSidebarCategory';
import ElementSidebarItem from './ElementSidebarItem';
import dottedSquare from '../../public/images/icons/dotted_square.svg';
import section from '../../public/images/icons/section.svg';
import div from '../../public/images/icons/div.svg';

export default function ElementSidebar(){
    return <div className={style.container}>
        <ElementSidebarCategory title="Containers">
            <ElementSidebarItem title="Div" icon={div} />
            <ElementSidebarItem title="Section" icon={section} />
            <ElementSidebarItem />
            <ElementSidebarItem />
            <ElementSidebarItem />
            <ElementSidebarItem />
            <ElementSidebarItem />
            <ElementSidebarItem />
        </ElementSidebarCategory>
        
        <ElementSidebarCategory title="Images">
            
        </ElementSidebarCategory>
    </div>  
}