import React,{useState,useEffect} from "react"
import $ from 'jquery'
import {addNotification, findUser, searchMembership} from "./apiDash"
import Moment from "moment"
import { addMemberToList } from "./listHelpers"


const Marker = () => 
{   

    const [values,setValues] = useState({
        credit:0,
        isActive:null,
        expiresAt:null,
        searched:false,
        error:''
    })

    const {email,credit,isActive,searched,expiresAt,error} = values;


    const addToList = (email) => 
    {
        addMemberToList(email)
    }

    const handleChange = (name) => e => {
        setValues({...values,error:false,[name]:e.target.value})}

    useEffect(()=>{
        setValues({...values,isActive:null,expiresAt:null,error:false,searched:true})

    },[])

    const createNotification = (notification) => {
        addNotification(notification).then(data=>{
            if(data.error)
            {
                //alert('Notification not added due to : ' + JSON.stringify(data.error))
            }
            else
            {
                //alert('Notification added successfully')
            }
        })
    }

    const searchSubmit = (e) => 
    {
        e.preventDefault()
        searchMembership({email})
        .then(data=>{
            let message = '';
            let read  = false;
            let type = 'ALERT';
            if(data.length > 0)
            {
                const firstLocker = data[0];
                if(firstLocker.error)
                {
                    setValues({...values,searched:false,error:firstLocker.error,expiresAt:'',success:false,isActive:false})
                    alert(`ENTRER COMPTE VALIDE`)
                    message=`UN COMPTE NON VALIDE A ETE RENTRE AVEC EMAIL:${JSON.stringify(email)}`;
                    createNotification({message,read,type})
                }
                else if(firstLocker.isActive)
                {
                    setValues({...values,searched:true,isActive:firstLocker.isActive,expiresAt:firstLocker.expiresAt});
                    alert(`VOTRE COMPTE EST VALIDE, EXPIRE LE :  ${Moment(firstLocker.expiresAt).format('MMMM d, YYYY')}`)
                    message=`UN COMPTE VALIDE A ETE RENTRE AVEC EMAIL: ${JSON.stringify(email)} VALID TILL : ${Moment(firstLocker.expiresAt).format('MMMM d, YYYY')}`;
                    createNotification({message,read,type})
                    addToList(email)
                }
                else
                {       
                    setValues({...values,searched:true,isActive:firstLocker.isActive,expiresAt:firstLocker.expiresAt});
                    alert(`VOTRE COMPTE EST PLUS VALIDE, A EXPIRE LE :  ${Moment(firstLocker.expiresAt).format('MMMM d, YYYY')}`)
                    message=`UN COMPTE DEJA EXPIRE A ETE RENTRE AVEC EMAIL: ${JSON.stringify(email)} EXPIRE LE  : ${Moment(firstLocker.expiresAt).format('MMMM d, YYYY')}`;
                    createNotification({message,read,type})
                    //addToList(email)
                }
            }
            else
            {
                setValues({...values,searched:true,isActive:false,expiresAt:''});
                message=`UN COMPTE NON VALIDE A ETE RENTRE AVEC EMAIL:${JSON.stringify(email)}`;
                alert("L'EMAIL RENTRE N'EST PAS VALIDE");
                createNotification({message,read,type})
            }
        })
        //alert(JSON.stringify(isActive));
        
    }

    
    return(
            <form className="addForm" onSubmit={searchSubmit}>
                <input 
                    className="emailSearch"
                    type="email" 
                    placeholder="SAISIR VOTRE EMAIL"
                    onChange={handleChange('email')}
                    required
                    />
                    
                    <button className="markButton"> MARQUER PRESENCE </button>
                
            </form>
            
    )

}


export default Marker;