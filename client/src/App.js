import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notify from './components/Notify';
import { fetchProducts } from './redux/actions/productAction';

function App() {
    const { notify, loading } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    // const routes = auth.token ? privateRoutes : publicRoutes;
    const routes = publicRoutes;

    return (
        <Router>
            {(!!notify.status || loading) && <Notify />}
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
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
