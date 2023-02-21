import React,{useEffect,useState} from "react"
import Menu2 from './Menu2'
import {Link} from "react-router-dom"
import $ from 'jquery'
import {listUsers} from "./apiDash"

const Membres = () => 
{   
    
    const [users,setUsers] = useState([]);

    const loadUsers = () => {
        listUsers().then(data=>{
            if(data.error)
            {
                console.log(data.error)
            }
            else
            {
                setUsers(data)
                
            }
        })
    }

    useEffect(()=>{
        loadUsers();
    },[])

    return(<div className="Home">
        <Menu2 activeTab={'.TAB5'}/>

        <div className="MembresT">
            
            <table className="t1">
                <tr>
                    <th className="t3">NOM</th>
                    <th className="t3">EMAIL</th>
                    <th className="t3">TELEPHONE</th>
                    <th className="t3">ADDRESSE</th>
                </tr>
                {
                    users.map((user,i)=>{
                        return(
                            <tr key={i}>
                                <td className="t3">{user.name}</td>
                                <td className="t3">{user.email}</td>
                                <td className="t3">{user.phone}</td>
                                <td className="t3">{user.address}</td>
                                <td className="t3"><Link className="modLink" to="/modifier?">VOIR</Link></td>
                            </tr>
                        )
                    })
                }
                
            </table>
        </div>
    </div>)

}


export default Membres;