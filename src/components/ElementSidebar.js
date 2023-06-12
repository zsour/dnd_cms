import style from '../../public/style/components/elementSidebar.module.css';
import ElementSidebarCategory from './ElementSidebarCategory';
import ElementSidebarItem from './ElementSidebarItem';
import section from '../../public/images/icons/section.svg';
import div from '../../public/images/icons/div.svg';

import { useLayoutMediator } from './hooks/layoutMediator';

export default function ElementSidebar(){

    const layout = useLayoutMediator();

    return <div className={style.container}>
        <ElementSidebarCategory title="Containers">
            <ElementSidebarItem title="Div" icon={div} onClick={() => {
                layout.addDiv();
            }}/>
            <ElementSidebarItem title="Section" icon={section} onClick={() => {
                layout.editDivStyle("8441c0d6-092d-4cff-9924-0ca004a358cd", {backgroundColor: "green"});
            }} />
        </ElementSidebarCategory>
        
        <ElementSidebarCategory title="Images">
            
        </ElementSidebarCategory>
    </div>  
}