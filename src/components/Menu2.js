import React,{useState, useEffect} from "react"



import {Link} from "react-router-dom"



import $ from 'jquery'

import {getNotificationCount} from "./apiDash"

import '../css/menu2.css'

import Logo from '../media/img/gvmLogo.png'


const Menu2 = ({activeTab}) => 
{   

    const [notificationsCount,setNotificationsCount] = useState();


    const getNotificationsAmount = () => {

        getNotificationCount().then(data=>{
            if(data.success)
            {
                console.log(data.error)
                setNotificationsCount(0)
            }
            else
            {
                setNotificationsCount(data.notificationCount);
            }
        })

    }   

    const dropDown = () => 
    {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    useEffect(()=>{
        $('.titleS').removeClass('active');
        $(activeTab).addClass('active');
    },[])

    return(
        <div>
            
            <header className="topnav">
            
                <h1 className="title">
                    <img className="dbLogo" src={Logo}/>
                    VIRTUAL GYM MANAGER
                </h1> 

                        <Link className="titleS TAB5" to="/membres">MEMBRES </Link>
                        
                        <Link className="titleS TAB10" to="/notifications">
                                ALERTES
                        </Link>

                        <Link className="titleS TAB2" to="/liste">PRESENCE</Link>
                    
                        <Link className="titleS TAB6" to="/ajouter">AJOUTER </Link>

                        <Link className="titleS TAB3" to="/chercher">CHERCHER </Link>    

                        <Link className="titleS TAB7" to="/paiement">PAIEMENTS</Link>

                        <Link className="titleS TAB8" to="/support">SUPPORT</Link>
                
                        <Link className="titleS TAB9" to="/account">ACCOUNT </Link>

                        <a style={{color:"white"}} className="icon" href="javascript:void(0);" class="icon" onClick={dropDown}>
                            SHOW MENU
                        </a>
            </header>
            
        </div>
        
        
        )
        
}

export default Menu2;