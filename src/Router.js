import React,{useEffect} from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Chercher from "./components/Chercher";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home"
import Signin from "./components/Signin"
import Membres from "./components/Membres"
import AjouterMembre from "./components/AjouterMembre";
import ListePresence from "./components/ListePresence";
import Compte from "./components/Compte";
import Paiement from "./components/Paiement";
import Support from "./components/Support";
import Notifications from "./components/Notifications";
import CreateMembership from "./components/CreateMembership"
import MembershipsList from "./components/MembershipsList"
import Landing from "./components/Landing";
import Register from "./components/Register";
import Account from "./components/Account";
import Login from "./components/Login";
import AuthRoute from "./components/route/AuthRoute";
import StripeSuccess from "./components/stripe-success";
import Basic from "./components/plans/basic";
import Standard from "./components/plans/standard";
import Premium from "./components/plans/premium";



const Router = () => {
    

    return (
        <BrowserRouter>
            <Switch>   
                
                <Route path="/" exact component={Landing}/>
                
                <Route path="/marker" exact component={Home}/>           
                
                <Route path="/login" exact component={Login}/> 
                
                <Route path="/register" exact component={Register}/>    

                
                <AuthRoute path="/basic" exact component={Home}/>
                
                <AuthRoute path="/signin" exact component={Signin}/>
                
                <AuthRoute path="/dashboard" exact component={Membres}/>
                
                <AuthRoute path="/chercher" exact component={Chercher}/>
                
                <AuthRoute path="/membres" exact component={Membres}/>
                
                <AuthRoute path="/ajouter" exact component={AjouterMembre}/>
                
                <AuthRoute path="/liste" exact component={ListePresence}/>  
                
                <AuthRoute path="/compte" exact component={Compte}/>
                
                <AuthRoute path="/paiement" exact component={Paiement}/>
                
                <AuthRoute path="/support" exact component={Support}/>
                
                <AuthRoute path="/notifications" exact component={Notifications}/>
                
                <AuthRoute path="/removeNotification" exact component={Notifications}/>
                
                <AuthRoute path="/createMembership" exact component={CreateMembership}/>     
                
                <AuthRoute path="/membershipList" exact component={MembershipsList}/>
                
                <AuthRoute path="/account" exact component={Account}/>
                
                <AuthRoute path="/stripe/success" exact component={StripeSuccess}/>
                
                <AuthRoute path="/basic" exact component={Basic}/>
                
                <AuthRoute path="/standard" exact component={Standard}/>
                
                <AuthRoute path="/premium" exact component={Premium}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router;