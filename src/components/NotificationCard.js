import React,{useEffect, useState} from "react"
import Menu2 from "./Menu2"
import {Link} from 'react-router-dom'
import moment from "moment"
import RemoveCard from '../media/img/removeBin.png'


const NotificationCard = ({message,read,id,date}) =>
{   
    
        
    return(
        <div title={moment(date).format('MMMM DD, YYYY HH:mm:SS')} className="nCardParent">
            
            <div className={`notificationCard`}>
                {message} 
                
            </div>
            <Link to={`/removeNotification?id=${id}`}><img className="removeImg" src={RemoveCard}/></Link>
        </div>
        )
}

export default NotificationCard;