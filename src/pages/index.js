import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import style from '../../public/style/index.module.css';
import { useLayoutMediator } from '../components/hooks/layoutMediator';
export default function Home(){

    const layout = useLayoutMediator();

    return <div className={style.main}>
        {layout.renderLayout()}
    </div>
}