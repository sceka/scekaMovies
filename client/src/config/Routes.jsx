import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
    return (
        <Switch>
            <Route path="/:category/search/:keyword" element={Catalog} />
            <Route path="/:category/:id" element={Detail} />
            <Route path="/:category" element={Catalog} />
            <Route path="/" element={Home} exact />
        </Switch>
    );
};

export default Routes;
