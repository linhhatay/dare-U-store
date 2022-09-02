import Home from '~/pages/Home';
import News from '~/pages/News';
import Support from '~/pages/Support';
import Contact from '~/pages/Contact';
import Products from '~/pages/Products';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.news, component: News },
    { path: config.routes.support, component: Support },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.products, component: Products },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };