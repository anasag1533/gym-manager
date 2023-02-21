import React from "react"
import Menu from './Menu'
import $ from 'jquery'

const Signin = () => 
{

 

    return(
        
        <div>
            <Menu />
            <form className="loginForm">
                <h1 className="loginTitle">LOGIN</h1>
                        <input className="emailIpt" type="email" placeholder="SAISIR VOTRE EMAIL"/>
                        <input className="emailIpt" type="password" placeholder="saisir mot de passe"/>
                        <button className="connectButton"> SE CONNECTER </button> 
            </form>
    </div>)

}
export default Signin;