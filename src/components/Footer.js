import React, { Fragment } from "react"
import uparrow from '../media/img/uparrow.png'
import location from '../media/img/location.png'
import telephone from '../media/img/telephone.png'
import letter from '../media/img/letter.png'
import Logo from '../media/img/gvmLogo.png'
import facebook from '../media/img/facebook.png'
import instagram from '../media/img/instagram.png'
import twitter from '../media/img/twitter.png'
import linkedin from '../media/img/linkedin.png'
import {Link} from "react-router-dom"


const Footer = () => {
    return (
        <Fragment>
            <footer>
                <ul className="footerList">
                    <li> <img className="footerIcon" src={telephone}/> +1 514 451 9321</li>
                    <li> <img className="footerIcon" src={letter}/> gymmamangager@gmail.com</li>
                    <li> <img className="footerIcon" src={location}/> 3520 Rue Belair MTL H2A 2A9 QC,CA</li>
                </ul>
                <ul className="footerList">
                    <li>  <a className="refLink" href="">FACEBOOK</a></li>
                    <li>  <a className="refLink" href="">INSTAGRAM</a></li>
                    <li>  <a className="refLink" href="">TWITTER</a></li>
                    <li>  <a className="refLink" href="">LINKEDIN</a></li>
                    <li>  <a className="refLink" href="">OUR POLICY</a></li>
                </ul>
                <div className="letterForm">
                    <h3 className="letterText">GET THE LATEST OFFERS AND UPDATES FROM US</h3>
                    <form className="newsLetterForm">
                        <input type="email" placeholder="your email for newsletter" className="emailNews"/>
                        <button className="subButton" >SUBSCRIBE</button>
                    </form>
                </div>
            </footer>
            <div className="copyRight">
                <h1>MADE BY <span className="dreamOfObjects">DREAMOFOBJECTS</span> ALL RIGHTS RESERVED 2018-2022</h1>
            </div>
            <a href="#home" className="upArrow">
                <img className="homeUpArrow" src={uparrow}/>
            </a>
        </Fragment>
    )
}
export default Footer;