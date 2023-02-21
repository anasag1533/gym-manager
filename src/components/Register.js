import React,{useEffect,useState,useContext} from "react"
import '../css/register.css'
import {Link} from  "react-router-dom"
import PaymentForm from "./PaymentForm"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import {UserContext} from './context'
import axios from "axios"
import uparrow from '../media/img/uparrow.png'
import location from '../media/img/location.png'
import telephone from '../media/img/telephone.png'
import letter from '../media/img/letter.png'
import Logo from '../media/img/gvmLogo.png'
import Person from '../media/img/person.png'
import Footer from './Footer'

const Register = ({history}) => 
{

    const [subscriptions,setSubscriptions] = useState([]);

    const [state,setState] = useContext(UserContext);

    const getSubscriptions = async() => 
    {
        const {data} = await axios.post('/subscriptions',{
            user:state.owner
        })
    }

    const [values,setValues] = useState({

        name:'',
        lastName:'',
        email:'',
        phone:'',
        address:'',
        zipcode:'',
        password:'',
        businessName:'',
        businessPhone:'',
        website:'',
        businessEmail:'',
        businessAddress:'',
        businessZipCode:''

    });

    const {name,lastName,email,phone,address,zipcode,password,businessName,businessPhone,website,businessEmail,businessAddress,businessZipCode} = values;


    useEffect(()=>{
        window.scrollTo(0, 0)   
        
    },[])

    const handleChange = name => e => {
        setValues({...values,error:false,[name]:e.target.value})
    }

    

    const clickSubmit = async (e) =>
    {   
        e.preventDefault();
        console.log(JSON.stringify(values))
        try
        {
            const {data} = await axios.post('/owner/register',{
                name,
                lastName,
                email,
                phone,
                address,
                zipcode,
                password,
                businessName,
                businessPhone,
                website,
                businessEmail,
                businessAddress,
                businessZipCode
            })
            console.log(data);

            if(data.error)
            {
                alert(JSON.stringify(data.error))
            }
            else
            {
                setValues({
                    ...values,
                    name:'',
                    lastName:'',
                    email:'',
                    phone:'',
                    address:'',
                    zipcode:'',
                    password:'',
                    businessName:'',
                    businessPhone:'',
                    website:'',
                    businessEmail:'',
                    businessAddress:'',
                    businessZipCode:''
                })
                setState(data);
                localStorage.setItem("auth",JSON.stringify(data));
                history.push('/account');
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return(
            <div className="register">
                <header id="home" className="topLanding">
                <h1 className="webTitle">
                    <img src={Logo} className="logoImg"/>
                </h1>
                <div className="nav-links">
                <ul>
                    <li> <Link className="normalLink active" to="/">HOME</Link></li>
                 
                    
                    <Link className="connectLink" to="/login">LOGIN</Link>
                </ul>
                </div>
            
                </header>
                    <form className="regForm">
                        <div className="forms">
                            <div className="part1">
                                {/* user information */}
                                <h1 className="formTitle">PERSONAL INFO</h1>
                                <div>
                                    <input type="text" className="registerInputHalfRegister" placeholder="name" value={name} onChange={handleChange('name')} required/>   
                                    <input type="text" className="registerInputHalfRegister" placeholder="last name" value={lastName} onChange={handleChange('lastName')} required/>
                                </div>
                                    <input type="email" className="registerInputFullRegister" placeholder="email" value={email} onChange={handleChange('email')} required/>
                                    <input type="phone" className="registerInputFullRegister" placeholder="phoneNumber" value={phone} onChange={handleChange('phone')} required/>
                                <div>
                                    <input type="text" className="registerInputHalfRegister" placeholder="address" value={address} onChange={handleChange('address')} required/>
                                    <input type="text" className="registerInputHalfRegister" placeholder="zip code" value={zipcode} onChange={handleChange('zipcode')} required/>
                                </div>
                                <div>
                                    <input type="password" className="registerInputFullRegister" placeholder="password" value={password} onChange={handleChange('password')} required/>
                                </div>

                            </div>

                            <div className="part1">
                                {/* business information */}

                                <h1 className="formTitle">BUSINESS INFO</h1>
                                    <input type="text" className="registerInputFullRegister" placeholder=" business name" value={businessName} onChange={handleChange("businessName")} required/>   
                                    <input type="url" className="registerInputFullRegister" placeholder="website link/ social media (optional)" onChange={handleChange("website")}  value={website}/>
                                    <input type="email" className="registerInputFullRegister" placeholder="business email" value={businessEmail} onChange={handleChange("businessEmail")}  required/>
                                    <input type="phone" className="registerInputFullRegister" placeholder="business phone number" value={businessPhone} onChange={handleChange("businessPhone")}  required/>
                                <div>
                                    <input type="text" className="registerInputHalfRegister" placeholder="business address" value={businessAddress} onChange={handleChange("businessAddress")}  required/>
                                    <input type="text" className="registerInputHalfRegister" placeholder="business zip code" value={businessZipCode} onChange={handleChange("businessZipCode")} required/>
                                </div>
                                
                                

                            </div>

                            

                            
                                
                                
                            
                            <button type="submit" className="regBButton" onClick={clickSubmit}>REGISTER</button>
                            

                            
                        </div>
                    </form>

                <Footer/>
            </div>
           )
}
export default Register;