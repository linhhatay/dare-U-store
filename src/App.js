import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Admin from './pages/Admin';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as productRequests from '~/redux/productSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productRequests.get());
    }, []);

    // const routes = auth.token ? privateRoutes : publicRoutes;
    const routes = publicRoutes;

    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
