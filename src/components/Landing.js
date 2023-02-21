import React,{useState,useEffect,useContext} from "react"
import '../css/style.css'
import Footer from './Footer'
import Logo from '../media/img/gvmLogo.png'
import Logo2 from '../media/img/gvmLogo2.png'
import {Link} from 'react-router-dom'
import {UserContext} from './context'
import axios from "axios"


const Landing = ({history}) => 
{       
    const [prices,setPrices] = useState([])

    const [state,setState] = useContext(UserContext)

    const [userSubscriptions,setUserSubscriptions] = useState([])


    const fetchPrices = async () => {
        const {data} = await axios.get('/prices');

        console.log('prices get request ' , data);

        setPrices(data);
    }

    const dynamicDescription = (price) => {
        if(price.nickname === 'Basic')
        {
            return "25 members Max"
        }
        else if (price.nickname === 'STANDARD')
        {
            return "150 Members Max"
        }
        else if(price.nickname === 'Premium')
        {
            return "Unlimited"
        }
    }

    const handleSubscription = async(e,price) => {

        e.preventDefault();

        if(userSubscriptions && userSubscriptions.includes(price.id))
        {
            history.push(`/${price.nickname.toLowerCase()}`)
            return;
        }
        if(state && state.token)
        {   

           const {data} = await axios.post('create-subscription',{
                priceId:price.id,
                user:state.owner
           })
           
           window.open(data);
        }
        else
        {
            history.push('/register')
        }
    }

    const buttonText = () => {
        return state && state.token ? 'BUY PLAN' : 'Sign Up'
    }

    useEffect(()=>{
        fetchPrices();
    },[])

    useEffect(()=>{
        let result = [];

        const check = () => 
        state && 
        state.user &&
        state.user.subscriptions &&
        state.user.subscriptions.map((sub) => {
            result.push(sub.plan.id);
        })
        check();

        setUserSubscriptions(result);

    },[state && state.owner])
    return(
        <div className="landingPage">
            <header id="home" className="topLanding">
                <Link to="/account" className="webTitle">
                    <img src={Logo} className="logoImg"/>
                </Link>
                <div className="nav-links">
                <ul>
                    <li> <a className="normalLink active" href="#home">HOME</a></li>
                    <li><a className="normalLink" href="#services">SERVICES</a></li>
                    <li><a className="normalLink" href="#pricing">PRICING</a></li>
                    <li><a className="normalLink" href="#contact">CONTACT</a></li>
                    <li>{
                        state && state.token ? (
                            <Link className="connectLink" to="/account">ACCOUNT</Link>
                        ):
                        (
                            <Link className="connectLink" to="/login">LOGIN</Link>
                        )
                    
                    }
                    </li>
                    
                </ul>
                </div>
            
            </header>
            <section>
                <div className="section-container">
                    <div className="presentation">
                        <h1 className="mainText1">
                            <img src={Logo} className="logoImg2"/>
                        </h1>
                        <h1 className="mainText2">
                            CANADA'S #1 GYM MANAGMENT APP
                        </h1>
                        <h1 className="mainText3">
                            TRUSTED BY OVER 50 BUSINESSES ALL OVER CANADA
                        </h1>

                    </div>
                    
                    <form className="demoForm">
                        <div className="inputDiv">
                            <input className="demoInputHalf" type="text" placeholder="name"/>
                            <input className="demoInputHalf" type="text" placeholder="last name"/>
                        </div>
                        <input className="demoInputFull" type="email" placeholder="email"/>
                        <div className="inputDiv">
                            <input className="demoInputHalf" type="text" placeholder="address"/>
                            <input className="demoInputHalf" type="text" placeholder="ZIP CODE"/>
                        </div>
                        <input className="demoInputFull" type="phone" placeholder="phone number"/>

                        <button className="demoInputButton">GET A DEMO</button>
                    </form>
                    
                </div>
            </section>
            <div className="statistics" id="services">
                <div className="numbers">
                    <div>
                        <p className="statisticNumber">
                            700 
                        </p>

                        <p className="statisticText">
                            HAPPY CLIENTS
                        </p>
                    </div>
                    <div>
                        <p className="statisticNumber">
                            40
                        </p>
                        <p className="statisticText">
                            NEW PROJECTS EVERY YEAR
                        </p>
                    </div>
                </div>
                <div className="services">
                    <h1 className="statisticNumber">SERVICES</h1>
                    <ul className="description">
                        <li>
                            Membership Management: <br/>Our app allows you to manage 
                            your members' details, including their personal information,
                            membership type, payment status, and attendance history.
                            You can also create and manage different membership
                            plans and packages, as well as offer promotions and discounts to your members.`
                        </li>
                        <li>
                            Class Scheduling: <br/> Our app allows you to schedule and manage different types of 
                            classes and sessions, including group fitness classes, personal training sessions, 
                            and other activities. You can also manage class attendance and track the progress of your members.
                        </li>
                        <li>
                            Payment Processing: <br/> Our app provides a secure and convenient way to process payments from your members.
                            You can easily track and manage all your financial transactions, including membership fees, class fees,
                            and other charges.
                        </li>
                        <li>
                            Reporting and Analytics: <br/>Our app offers powerful reporting and analytics tools that help you track your
                            gym's performance, including membership growth, attendance rates, revenue, and more. You can also generate 
                            custom reports and get insights into your gym's overall performance.
                        </li>
                        <li>
                            Communication: <br/> Our app offers a range of communication tools, including email and SMS, that allow you to stay
                            in touch with your members and keep them updated about your gym's activities, classes, and promotions.
                         </li>
                        <li>
                            Member Portal: <br/> Our app provides a member portal that allows your members to manage their account information, 
                            view their attendance history, and register for classes. This helps to increase member engagement and satisfaction.
                        </li>
                        
                    </ul>

                </div>
            </div>

            <div className="pricing" id="pricing">
                <h1>OUR PLANS <Link className="plansLink" to="/register">GET STARTED HERE</Link></h1>
                <div className="plans">
                    
                    {
                        prices && prices.map((price) => 
                        (
                            <div className="plan">
                               
                                <h1 className="planTitle">
                                    {price.nickname}
                                </h1>
                                <h1 className="planPrice">
                            
                                    {(price.unit_amount / 100).toLocaleString("en-US",{
                                        style:'currency',
                                        currency:'USD'
                                    })}

                                <small> /MO</small>
                                
                                </h1>
                                <p className="planFeature">{dynamicDescription(price)}</p>
                                <p className="planFeature">Ajouter Membres</p>
                                <p className="planFeature">Gerer Abonnements</p>
                                <p className="planFeature">Marquer Presence dans GYM</p>
                                <p className="planFeature">Recevoir des Notifications </p>
                                <p className="planFeature">Chercher Membres</p>
                                <p className="planFeature">suivre les paiements</p>
                                <button className="chooseLink" onClick={(e)=>handleSubscription(e,price)} >
                                    {
                                        userSubscriptions && userSubscriptions.includes(price.id)
                                        ? 'Access plan': 
                                        buttonText()
                                    }
                                </button>
                        
                            </div>
                        ))
                    }
                    

                                       
                </div>
            </div>
            <div className="contact">
                <h1 className="planTitle" id="contact">CONTACT US</h1>
                <form className="contactForm">
                    <input className="demoInputFull" type="email" placeholder="email"/>
                    <textarea className="msgTextArea" placeholder="message here"></textarea>
                    <button className="demoInputButton">SEND</button>
                </form>
            </div>

            <Footer/>
        </div>
    )
}
export default Landing;