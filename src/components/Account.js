import React , {useState,useEffect,useContext, Fragment} from "react"

import axios from "axios"

import {UserContext} from './context'

import moment from 'moment'

import { useHistory } from "react-router-dom"

import {Link} from "react-router-dom"

import '../css/account.css'

import Profile from '../media/img/person.png'

import Footer from "./Footer"

import Logo from '../media/img/gvmLogo.png'


const Account = () => {

    const [state,setState] = useContext(UserContext);
    const [subscriptions,setSubscriptions] = useState([]);

    const history = useHistory();

    const logout = () => {
        setState({owner:{} , token: ""})
        localStorage.removeItem("auth");
        history.push("/")
    }
    
    // const getSubscriptions =  async () => 
    // {
    //     const {data} = await axios.post('/subscriptions',{
    //         user:state.owner
    //     })
    //     setSubscriptions(data.data);
    // }

    const manageSubscriptions = async () => 
    {   

        const {data} = await axios.post('/customer-portal',{
            user:state.owner
        });
        window.open(data)
    }

    useEffect(()=>{
        //if(state && state.token) { getSubscriptions() }
    },[state && state.token])
   
    return (
    <div className="Account">
        <div id="home" className="userInfo">
        <Link to="/" className="webTitle">
            <img src={Logo} className="logoImg"/>
        </Link>
        {state && state.token  ? (
            <Fragment >
                    {/* <img className="profileImg" src={Profile}/> */}
                    <h1 className="userTitle">
                        {state.owner.email}
                    </h1>
                    
                    <h1 className="userTitle">
                    {state.owner.name} 
                    {" "}
                    {state.owner.lastName}
                    </h1>
                
                    <button className="logoutButton" onClick={logout}>
                        Logout
                     </button>
                
            
            </Fragment>
            ) : (
                <Fragment>

                </Fragment>
            )}
            
        </div>
        <div className="middleDetails">
            <div className="businessDetails">
                <div>
                    <h1 className="detailTitle">BUSINESS DETAILS</h1>
                    <h1 className="detail">  Name   : {state.owner.businessName}</h1>
                    <h1 className="detail">  phone  : {state.owner.businessPhone}</h1>
                    <h1 className="detail"> Support : {state.owner.businessEmail}</h1>
                    <h1 className="detail"> Address : {state.owner.businessAddress}</h1>
                    
                </div>
                <div className="ButtonsAccount">
                    <Link className="logoutButton2" to="dashboard" > DASHBOARD </Link>
                    <Link className="logoutButton2" to="/" > HOME </Link>
                    <Link className="logoutAlert2" to="#" > CLOSE ACCOUNT </Link>
                </div>
                
            </div>
            
        </div>
        <Footer/>
    </div>)

}
export default Account;