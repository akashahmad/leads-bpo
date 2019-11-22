import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './containers/home/home';
import Help from './containers/help';
import Form from './component/Form/form';
import Thankyou from './component/Thankyou/Thankyou';
import Form2 from './component/form2/form';
import FormPage from './containers/formPage/form'

export default  () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={HomePage}/>
                <Route path={"/help"} component={Help}/>
                <Route path={"/form"} component={Form}/>
                <Route path={"/Thankyou"} component={Thankyou}/>
                <Route path={"/form2"} component={Form2}/>
                <Route path={"/formPage"} component={FormPage}/>
            </Switch>
        </BrowserRouter>
    );
}