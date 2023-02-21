import React,{useState,useEffect} from "react"
import Menu2 from './Menu2'
import {listUsers,addMembership} from "./apiDash"
import {Link} from "react-router-dom"

const CreateMembership = () => {

    
    const [users,setUsers] = useState([])

    const [values,setValues] = useState({
        credit:'',
        isActive:'',
        expiresAt:'',
        user:''
    })  
    
    const handleChange = name => event => {
        setValues({...values,error:false,[name]:event.target.value})
        //alert(event.target.value);
    }

    const {credit,isActive,expiresAt,user} = values

    const getUsers = () => 
    {
        listUsers().then(data=>{
            if(data.error)
            {
                alert(data.error)
            }
            else
            {
                setUsers(data)
            }
        })
    }

    useEffect(()=>{
        getUsers()
    },[])

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({...values,error:false})
        addMembership({credit,isActive,expiresAt,user})
        .then(data=>{
            if(data.error)
            {
                setValues({...values,error:data.error,success:false})
                
            }
            else
            {
                setValues({
                    ...values,
                    credit:'',
                    isActive:'',
                    expiresAt:'',
                    user:''
                })
            }
        })

    }



    return (    
        <div className="Home">
            
            <Menu2/>
            <form className="addMembershipForm" >
                <div>
                    <Link to="/membershipList">LISTE DES ABONNEMENTS</Link>
                </div>
                <p className="formText">CREER NOUVEAU ABONNEMENT</p>
                <input type="text" className="formInput" placeholder="credit" onChange={handleChange('credit')} value={credit} required/>
                <input type="date" className="formInput" placeholder="expire le" onChange={handleChange('expiresAt')} value={expiresAt} required/>
                <select className="formSelect formInput" onChange={handleChange('isActive')} value={isActive} required>
                    <option value={true}>
                        ACTIF
                    </option>
                    <option value={false}>
                        NON ACTIF
                    </option>
                </select>
                <select className="formSelect formInput" onChange={handleChange('user')} value={user} required>
                    {
                        users.map((user,i)=>{
                            return(
                                <option key={user._id} value={user._id}>{user.name}  {user.lastName}</option>
                            )
                        })
                    }
                </select>
                <button onClick={clickSubmit} className="validateButton">AJOUTER</button>
            </form >
        </div>
    )

}
export default CreateMembership;