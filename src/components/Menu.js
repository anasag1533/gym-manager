import React from "react"

import {Link} from "react-router-dom"

import $ from 'jquery'



const Menu = () => 
{   

    return(
        <div>
            {}
            <header className="menu">
                <h1 className="title">BOXING GYM MANAGER V1.0.0</h1>
                <div className="links"> 
                <Link className="titleS active" to="/">ACCEUIL</Link>
                <Link className="titleS" to="/Signin">CONNEXION</Link>
                </div>


            </header>
        </div>
        
        )
}

export default Menu;