import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './containers/home/home';
import Help from './containers/help';
export default  () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={HomePage}/>
                <Route path={"/help"} component={Help}/>
            </Switch>
        </BrowserRouter>
    );
}