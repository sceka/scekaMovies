import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/:category/search/:keyword" component={Catalog} />
            <Route path="/:category/:id" component={Detail} />
            <Route path="/:category" component={Catalog} />
            <Route path="/" component={Home} exact />
        </BrowserRouter>
    );
};

export default Routes;
