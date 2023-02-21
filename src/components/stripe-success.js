import React , {useState,useEffect,useContext} from 'react'

import axios from 'axios'

import {UserContext} from './context'

import Logo from '../media/img/gvmLogo.png'

const StripeSuccess = ({history}) => {

    const [state,setState] = useContext(UserContext);

    useEffect(() => {
        getSubscriptionStatus();
    },[])

    const getSubscriptionStatus = async() => {
        const {data} = await axios.post('/subscription-status',{
            user:state.owner
            
        });
        console.log('SUBSCRIPTION STATUS : ' , data);

        if(data && data.length === 0)
        {
            history.push("/")
        }
        else
        {
            // update user in local storage
            const auth = JSON.parse(localStorage.getItem('auth'));
            auth.user = data;

            localStorage.setItem('auth',JSON.stringify(auth));

            setState(auth);

            setTimeout(()=>{
                history.push("/account");
            },4000)
        }
    }

    return (
            <div className="loadingDiv">
                <h1><img src={Logo} /> LOADING .... </h1>
            </div>)
}

export default StripeSuccess;