import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Drawer from '../../components/drawer/Drawer';

interface routeList {
    path?: string;
    name?: string;
    component?: any;
    isExact?: boolean;
}

const LayoutDashboard = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

    console.log('sidebarIsOpen', sidebarIsOpen);

    const getRoutes = (routes: routeList[]) => {
        return routes.map((rl, key) => {
            return (
                <Route
                    path={rl.path}
                    component={rl.component}
                    key={key}
                    exact={rl.isExact}
                />
            );
        });
    };

    return (
        <div className='c-main-layout'>
            <Drawer
                isOpen={sidebarIsOpen}
                setIsOpen={(e) => setSidebarIsOpen(e)}
            />
            <div className='header-background-2'></div>

            <div className='wrapper-header'>
                {/* <img
                        alt='header-logo'
                        src={require('../../assets/images/header.png').default}
                    /> */}
            </div>

            <div
                className={
                    sidebarIsOpen ? 'wrapper-content active' : 'wrapper-content'
                }
            >
                <Switch>{getRoutes(routes)}</Switch>
            </div>
        </div>
    );
};

export default LayoutDashboard;
