import React,{useState,useEffect} from "react"
import Menu2 from "./Menu2"
import Marker from "./Marker"
import {Link} from "react-router-dom"
import $ from 'jquery'
import { listUsersSearch } from "./apiDash"

const Chercher = () =>
{   

    const [data,setData] = useState({
        nom:'',
        email:'',
        telephone:'',
        addresse:'',
        membership:'',
        search:'',
        result:[],
        searched:false,
        error:false
    })

    const {nom,email,telephone,addresse,membership,results,search,searched,error} = data;

    const searchData = () => {
        if(search)
        {
            listUsersSearch({search:search || undefined}).then(
                response=>{
                    if(response.error)
                    {
                        setData({...data,error:true})        
                    }
                    else
                    {
                        setData({...data,results:response,searched:true,error:false})
                    }
                }
            )
        }
    }
    
    const handleChange = (name) => e => {
        setData({...data,[name]:e.target.value,searched:false})
    }

    const searchSubmit = (e) => {
        
         e.preventDefault();
         searchData();
    }

    const showResults = (results=[]) => {
       
            return(
                <div className="tableDiv">
                    {results.map((user,i)=>(
                    
                    <table key={i} className="tb">
                    <tr >
                        <td className="t4">NOM</td>
                        <td className="t4">:</td>
                        <td className="t4">  {user.name}  </td>
                    </tr>    
                    <tr>    
                        <td className="t4">CODE</td>
                        <td className="t4">:</td>
                        <td className="t4">  {user._id}  </td>
                    </tr>
                    <tr>
                        <td className="t4">EMAIL</td>
                        <td className="t4">:</td>
                        <td className="t4">  {user.email}  </td>
                    </tr>
                    <tr>
                        <td className="t4">ADDRESSE</td>
                        <td className="t4">:</td>
                        <td className="t4">  {user.address}  </td>
                        </tr>
                    <tr>
                        <td className="t4">PHONE</td>
                        <td className="t4">:</td>
                        <td className="t4">  {user.phone}  </td>
                    </tr>
                    <tr>
                        <td className="t4"><Link className="greenLink" to={`/modifier?id=${user._id}`}>MODIFIER</Link></td>
                        <td className="t4"><Link className="greenLink" to={`/supprimer?id=${user._id}`}>SUPPRIMER</Link></td>
                        <td className="t4"><Link className="greenLink"  to={`/abonnement?id=${user._id}`}>ABONNEMENT</Link></td>

                    </tr>
                    </table>
                    ))}
                </div>
                    

            )
       
    }

    const showError = (e) =>{
        if(e)
        {
            return(<h1>USER NOT FOUND</h1>)
        }
        else
        {
            return(<h1>NO ERROR</h1>)
        }
    }
    return(
        <div className="Chercher">
            <Menu2 activeTab={'.TAB3'}/>

            <form className="searchForm" onSubmit={searchSubmit}>
            <h1 className="title">CHERCHER UTILISATEUR </h1>
            <div className="inDiv">
                <input 
                    className="searchUser" 
                    hint="Chercher" 
                    type="search" 
                    placeholder='saisir nom'
                    onChange={handleChange('search')}
                    />
            <button className="sButton">CHERCHER</button>
            
            </div>
            {showResults(results)}
            </form>
            
            
            
            
        </div>
        )
}

export default Chercher;