// import React from 'react';
// import Lazyloading from '../components/loading/LazyLoading';

import ApiKeys from '../../pages/apikeys/ApiKeys';
import CallMonitoring from '../../pages/call/CallMonitoring';
import Documentation from '../../pages/documentation/Documentation';
import RecordManagement from '../../pages/record/RecordManagement';
// import Welcome from '../../pages/home/Home';
import Home from '../../pages/home/Home';

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => <Home />,
        isExact: true,
    },
    {
        path: '/apikeys',
        name: 'ApiKeys',
        component: () => <ApiKeys />,
        isExact: true,
    },
    {
        path: '/record',
        name: 'Recording Management',
        component: () => <RecordManagement />,
        isExact: true,
    },
    {
        path: '/call',
        name: 'Call Monitoring',
        component: () => <CallMonitoring />,
        isExact: true,
    },
];

export default routes;
