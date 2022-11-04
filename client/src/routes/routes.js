import Home from '~/pages/Home';
import News from '~/pages/News';
import Support from '~/pages/Support';
import Contact from '~/pages/Contact';
import Store from '~/pages/Store';
import Admin from '~/pages/Admin';
import Auth from '~/pages/Auth';
import Cart from '~/pages/Cart';
import Pay from '~/pages/Pay';
import ProductDetails from '~/components/ProductDetails';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.news, component: News },
    { path: config.routes.support, component: Support },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.store, component: Store },
    { path: config.routes.auth, component: Auth },
    { path: config.routes.details, component: ProductDetails },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.pay, component: Pay },
];

const privateRoutes = [
    // { path: config.routes.admin, component: Admin, layout: null }
];
export { publicRoutes, privateRoutes };
