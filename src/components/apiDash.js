import React from "react"
import queryString from 'query-string'

import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"


export const listUsers = () => {
    return fetch(`http://localhost:9000/api/user/list`,{
        method:"GET",
        headers:{
            Accept:'application/json'
        }
    })
    .then(response=>{{
        return response.json();
    }})
    .catch(error=>console.log(error))
}

export const listNotifications = () => {
    return fetch(`http://localhost:9000/api/notification/list`,{
        method:"GET",
        headers:{
            Accept:'application/json'
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(error => console.log(error))
}


//find user by name and last name

export const listUsersSearch = params => {

    const query = queryString.stringify(params);
    console.log(query);
    return fetch(`http://localhost:9000/api/user/search?${query}`,{
        method:"GET"
    })
    .then(response=>{{
        return response.json();
    }})
    .catch(error=>console.log(error))
}


//find user by email


export const searchMembership = email => 
{   

    return fetch(`http://localhost:9000/api/membership/validate`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(email)
    })
    .then(response=>{
        return response.json()
        
    })
    .catch(err=>{
        console.log(err)
    })
}

export const addNotification = notification => {
    
    return fetch(`http://localhost:9000/api/notification/create`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(notification)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })

}

export const addMembership = membership => {
    return fetch(`http://localhost:9000/api/membership/create`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(membership)

    })
    .then(response=>{
        console.log(JSON.stringify(membership))
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

 export const getNotificationCount = () => {

    return fetch(`http://localhost:9000/api/notification/get/count`,{
        method:"GET",
        headers:{
            Accept:'application/json'
        }
    })
    .then(response=>{
        return response.json();
    })
    .catch(error=>console.log(error));

 }

 export const deleteNotification = (notificationId) => {
    return fetch(`http://localhost:9000/api/notification/remove/${notificationId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
    })
 }

 export const getMemberships = () => {

        return fetch(`http://localhost:9000/api/membership/list`,{
            method:"GET",
            headers:{
                Accept:'application/json'
            }
        })
        .then(response=>{
            return response.json();
        })
        .catch(error=>console.log(error))
 }


 