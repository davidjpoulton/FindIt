import React from "react";

import { BrowserRouter, Switch, Route} from "react-router-dom";
import Search from "./Search"
import ImageView from "./ImageView";


const Router = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" component={Search} exact />
                <Route path="/image/:id" component={ImageView} exact />
            </Switch>
        </BrowserRouter>
    )

}

export default Router;