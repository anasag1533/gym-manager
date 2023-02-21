import React,{useState,useEffect} from "react"
import Menu2 from "./Menu2"
import Marker from "./Marker"
import Circles from "./Circles"
import $ from 'jquery'
import { signup } from "./auth"
import {Link} from "react-router-dom"


const AjouterMembre = () =>
{       


    const [values,setValues] = useState({
        name:'',
        phone:'',
        email:'',
        address:'',
        error:'',
        success:false
    })

    const {name,phone,email,address,success,error} = values

    const handleChange = name => event => {
        setValues({...values,error:false,[name]:event.target.value})
    }

    const clickSubmit = (e) => {
        
        e.preventDefault();
        setValues({...values,error:false});
        signup({name,phone,email,address})
        .then(data =>{
            if(data.error)
            {
                setValues({...values,error:data.error,success:false})
            }
            else
            {
                setValues({
                    ...values,
                    name:'',
                    phone:'',
                    address:'',
                    success:true
                })
            }
        })
        alert(JSON.stringify(values));
    }

    const showSuccess = () => {
        if(success)
        {
            return(<div className="success">
                        USER ADDED SUCCESSFULLY
                    </div>)
        }
    }

    const showError = () => {
        if(error)
        {
            return(<div className="error">ERROR : {JSON.stringify(error)}</div>)
        }
    }
   

    return(
        <div className="Home H2">
            <Menu2 activeTab='.TAB6'/>
            
            <form className="ajouterMembre">
                <div>
                <Link to="/createMembership">AJOUTER ABONNEMENT ICI</Link>
                </div>
                {showSuccess()}
                {showError()}
                <h3 className="title" >AJOUTER UTILISATEUR</h3>
                <input 
                 className="registerInputFullRegister"
                 type="text" 
                 placeholder="NAME"
                 onChange={handleChange('name')}/>
                <input  
                 className="registerInputFullRegister" 
                 type="text" 
                 placeholder="PHONE"
                 onChange={handleChange('phone')}/>
                <input  
                 className="registerInputFullRegister" 
                 type="email" 
                 placeholder="EMAIL"
                 onChange={handleChange('email')}/>
                <input  
                 className="registerInputFullRegister" 
                 type="text" 
                 placeholder="ADDRESS"
                 onChange={handleChange('address')}/>
                <button onClick={clickSubmit} className="addButton">AJOUTER</button>
                
            </form>

        </div>
        )

}

export default AjouterMembre;