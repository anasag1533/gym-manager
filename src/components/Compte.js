import React from "react"

import Menu2 from "./Menu2"


import {Link} from "react-router-dom"

import $ from 'jquery'

const Compte = () => {

   

    return(<div>
        <Menu2 activeTab={'.TAB1'}/>
        <div className="CompteDiv">
            <h1 className="compteTitle">COMPTE</h1>
            <table>
                <tr>
                    <td>STATUS COMPTE</td>
                    <td>:</td>
                    <td>ACTIF</td>
                </tr>
                <tr>
                    <td>CREDIT</td>
                    <td>:</td>
                    <td>$ 200</td>
                </tr>
                <tr>
                    <td>STATUS COMPTE</td>
                    <td>:</td>
                    <td>ACTIF</td>
                </tr>
                <tr>
                    <td>NOM</td>
                    <td>:</td>
                    <td>ANAS AG</td>
                </tr>
                <tr>
                    <td>PRENOM</td>
                    <td>:</td>
                    <td>ANAS AG</td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>:</td>
                    <td>ANASAG@gmail.com</td>
                </tr>
                <tr>
                    <td>TELEPHONE</td>
                    <td>:</td>
                    <td>+1 514 451 9322</td>
                </tr>
                <tr>
                    <td>ADRESSE</td>
                    <td>:</td>
                    <td>3520 Rue BarClay</td>
                </tr>
                <tr>
                    <td>ADRESSE GYM</td>
                    <td>:</td>
                    <td>3520 Rue BarClay</td>
                </tr>
                <tr>
                    <td>CODE POSTAL</td>
                    <td>:</td>
                    <td>H2A 2A9</td>
                </tr>
                <tr>
                    <td><Link to="#">MODIFIER</Link></td>
                    <td>:</td>
                    <td><Link to="#">DESACTIVER</Link></td>
                </tr>
                
            </table>
        </div>
    </div>)
}
export default Compte;