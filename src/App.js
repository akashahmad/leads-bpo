import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './containers/home/home';
import Help from './containers/help';
import FormPage from './containers/formPage/form';
import ThankuPage from './containers/thankuPage';
import PrivacyPolicy from './containers/privacyPolicy';
import TermsandCondition from './containers/TermsandCondition/Terms';

export default  () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={HomePage}/>
                <Route path={"/chat"} component={Help}/>
                <Route path={"/contact-form"} component={FormPage}/>
                <Route path={"/thank-you"} component={ThankuPage}/>
                <Route path={"/privacy-policy"} component={PrivacyPolicy}/>
                <Route path={"/term&Condition"} component={TermsandCondition}/>
            </Switch>
        </BrowserRouter>
    );
}