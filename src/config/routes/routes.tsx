// import React from 'react';
// import Lazyloading from '../components/loading/LazyLoading';

import Welcome from '../../pages/welcome/Welcome';

const routes = [
    {
        path: '/welcome',
        name: 'Welcome',
        component: () => <Welcome />,
        isExact: true,
    },
];

export default routes;
