import React , {useState,useEffect,useContext, Fragment} from "react"

import Menu2 from './Menu2'

import {Link} from "react-router-dom"

import $ from 'jquery'

import {UserContext} from './context'

import axios from "axios"

import moment from 'moment'

import { useHistory } from "react-router-dom"


const Paiement = () => {


    const [state,setState] = useContext(UserContext);
    const [subscriptions,setSubscriptions] = useState([]);

    const history = useHistory();

    const logout = () => {
        setState({owner:{} , token: ""})
        localStorage.removeItem("auth");
        history.push("/")
    }
    
    const getSubscriptions =  async () => 
    {
        const {data} = await axios.post('/subscriptions',{
            user:state.owner
        })
        setSubscriptions(data.data);
    }

    const manageSubscriptions = async () => 
    {   

        const {data} = await axios.post('/customer-portal',{
            user:state.owner
        });
        window.open(data)
    }

    
    useEffect(()=>{
        if(state && state.token) { getSubscriptions() }
    },[state && state.token])

        return(
        <div>
            <Menu2 activeTab='.TAB7'/>
            
                {
                    subscriptions && subscriptions.map((sub)=>(
                        <div className="subDivCard">
                            <h1 className="detailTitle">SUBSCRIPTION DETAILS</h1>
                            <h1 className="detail">  Package : {sub.plan.nickname}</h1>
                            <h1 className="detail">
                                PRICE : {(sub.plan.amount / 100).toLocaleString("en-US",{
                                style:'currency',
                                currency: sub.plan.currency
                                })}/Month
                            </h1>
                            <h1 className="detail">
                                    Current period end : 
                                        {
                                            moment(sub.current_period_end * 1000)
                                            .format('dddd, MMMM Do YYYY h:mm:ss a')
                                            .toString()
                                        }
                                </h1>
                                <div>
                                    <button onClick={manageSubscriptions} className="logoutButton">
                                        MANAGE
                                    </button>
                                </div>
                        </div>
                        
                    ))
                }
                
            
        </div>)
}
export default Paiement;