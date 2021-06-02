import React, { FC } from 'react';
// import './App.css';
import decode from 'jwt-decode';
import { Switch, Route, Redirect } from 'react-router-dom';
import LayoutDashboard from './config/routes/LayoutDashboard';
import Login from './pages/auth/Login';

interface routeList {
    component?: any;
    isAuth?: boolean;
}

function App() {
    const checkAuth = () => {
        const token = localStorage.getItem('@token-ngage-client');
        if (!token) {
            return false;
        }

        try {
            var decoded: any = decode(token);
            var exp: any = decoded.exp;
            var now = Date.now() / 1000;

            // if (exp < new Date().getTime() / 1000) {
            if (exp < now) {
                localStorage.clear();
                return false;
            }
        } catch (e) {
            return false;
        }

        return true;
    };

    const PrivateRoute: FC<routeList> = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={(props) =>
                checkAuth() ? (
                    // isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );

    return (
        <Switch>
            <Redirect from='/' to='/login' exact />
            <Route path='/login' exact>
                <Login />
            </Route>
            <PrivateRoute component={LayoutDashboard} isAuth={checkAuth()} />
        </Switch>
    );
}

export default App;
