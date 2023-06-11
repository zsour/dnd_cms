
import {useRouter} from 'next/router';
import Head from 'next/head';

import ElementSidebar from '../components/ElementSidebar';
import ViewHeader from '../components/ViewHeader';
import PropertySidebar from '../components/PropertySidebar';
import '../../public/style/app.css';

import { LayoutMediatorProvider } from '../components/hooks/layoutMediator';
import { ElementSidebarMediatorProvider } from '../components/hooks/elementSidebarMediator';

export default function App({Component, pageProps}){
    return <div className="content">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&display=swap" rel="stylesheet"></link>
        </Head>

        <LayoutMediatorProvider>
            <ElementSidebarMediatorProvider>
                <ViewHeader />
                <ElementSidebar />
                <Component {...pageProps} />
                
                <PropertySidebar />
            </ElementSidebarMediatorProvider>
        </LayoutMediatorProvider>
    </div>;
}