import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Admin from './pages/Admin';

function App() {
    return (
        <Router>
            <div className="App">
                <Admin />
                {/* <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
