import React from "react";
import ReactDom from 'react-dom/client';
import Routes from "./Router";
import App from "./App"
import 'bootstrap/dist/css/bootstrap.css';
import {UserProvider} from './components/context'
import Router from './Router'



const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserProvider>
            <Router/>
        </UserProvider>
    </React.StrictMode>
)