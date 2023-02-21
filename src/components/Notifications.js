import React, { useEffect , useState} from "react"
import Menu2 from "./Menu2"
import $ from 'jquery'
import NotificationCard from "./NotificationCard"
import {listNotifications,deleteNotification} from "./apiDash"
import {getNotificationCount} from "./apiDash"

const Notifications = () =>
{   

    const [notifications,setNotifications] = useState([]);

    const queryParams = new URLSearchParams(window.location.search)

    const notId = queryParams.get('id')


    const removeNotification = () => {
        if( notId != '' && notId != null)
        {
            deleteNotification(notId)
        }
    }

    const loadNotifications = () => {
        listNotifications().then(data=>{
            if(data.error)
            {
                console.log(data.error)
            }
            else
            {
                setNotifications(data)
            }
        })
    }

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
    

    useEffect(()=>{
        getNotificationsAmount();
        loadNotifications();
        removeNotification();
    })
   
    return(
        <div className="Home">
            <Menu2 activeTab={'.TAB10'}/>
            <div className="presence">
                
                <h1 className="title">NOTIFICATIONS {
                                    notificationsCount && notificationsCount > 0 ? 
                                    (` : ${JSON.stringify(notificationsCount)}`) 
                                        :
                                    (" ")
                                }</h1>

                {notifications.map((notification,i)=>{

                  return(<NotificationCard 
                    message={notification.message}
                    read={notification.read}
                    cat={'notificationCardAlert'}
                    id={notification._id}
                    date={notification.date}
                    />  )
                })}
                
                

                
            </div>
        </div>
        )
}

export default Notifications;