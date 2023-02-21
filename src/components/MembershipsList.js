import React,{useState,useEffect} from "react"
import Menu2 from './Menu2'
import { getMemberships } from "./apiDash"

const MembershipsList = () => {

    const [memberships,setMemberships] = useState([])
    


    useEffect(()=>{
        getMemberships().then(data=>{
            if(data.error)
            {
                alert(JSON.stringify(data.error))
            }
            else
            {
                setMemberships(data)
            }
        })
    },[])

    return (    
        <div className="Home">
            
            <Menu2/>
            <div className="membershipsList">
                {memberships.map((m,i) => {

                    return(
                    <table className="table1">
                        <tr>
                            <td>NOM MEMBRE</td>
                            <td>:</td>
                            <td>{m.user.name}</td>
                        </tr>
                        <tr>
                            <td>EXPIRE LE</td>
                            <td>:</td>
                            <td> {m.expiresAt}</td>
                        </tr>
                        <tr>
                            <td>CREDIT</td>
                            <td>:</td>
                            <td> {m.credit}</td>
                        </tr>

                    </table>)

                })}
            </div>
            </div>
        )
        

}
export default MembershipsList;