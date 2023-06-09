
import {useRouter} from 'next/router';
import Head from 'next/head';

import ElementSidebar from '../components/elementSidebar';
import ViewHeader from '../components/ViewHeader';
import PropertySidebar from '../components/PropertySidebar';
import '../../public/style/app.css';

export default function App({Component, pageProps}){

    return <div className="content">
        <ViewHeader />
        <ElementSidebar />
        <Component {...pageProps} />
        <PropertySidebar />
    </div>;
}