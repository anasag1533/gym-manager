import axios from "axios";
import React,{useState,useContext} from "react"
import { UserContext } from "./context";
import Logo from '../media/img/gvmLogo.png'
import {Link} from 'react-router-dom'
import '../css/login.css'
import uparrow from '../media/img/uparrow.png'
import location from '../media/img/location.png'
import telephone from '../media/img/telephone.png'
import letter from '../media/img/letter.png'
import Footer from "./Footer";

const Login = ({history}) =>
{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [state,setState] = useContext(UserContext);


    const handleClick = async (e) => {
        console.log('email and passsword', email, password);

        try
        {   
            e.preventDefault();
            const {data} = await axios.post('owner/login',{
                email,
                password
            });
            console.log(data);
    
            if(data.error)
            {
                alert(JSON.stringify(data.error))
            }
            else
            {   
                setEmail('')
                setPassword('')
                setState(data);
                localStorage.setItem("auth", JSON.stringify(data));
                history.push('/account'); 
            }
        }
        catch(err)
        {
            alert(JSON.stringify(err))
        }
    }


    return (
        <div className="loginParent">
            
                <header id="home" className="topLanding">
                    <h1 className="webTitle">
                        <img src={Logo} className="logoImg"/>
                    </h1>
                    <div className="nav-links">
                    <ul>
                        <li> <Link className="normalLink active" to="/">HOME</Link></li>
                        
                        
                        <Link className="connectLink" to="/register">REGISTER</Link>
                    </ul>
                    </div>
                
                </header>


            
                <form className="loginForm">
                    <h1 className="formTitle">CONNECTEZ-VOUS</h1>
                    <input className="registerInputHalfRegister" type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="registerInputHalfRegister" type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="regBButton" onClick={handleClick}>LOGIN</button>
                </form>



                <Footer/>
                
        </div>
    )

}
export default Login;