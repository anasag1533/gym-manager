import React, { useEffect,useState } from "react"
import Menu2 from "./Menu2"
import {getMemberList,emptyList} from './listHelpers'


const ListePresence = () =>
{   
   
    const [presenceList,setPresenceList] = useState([])
    

    useEffect(()=>{
        setPresenceList(getMemberList())
        
    },[])

    const viderListePresence = () => {
        emptyList()
    }
    return(
        <div className="Home">
            <Menu2 activeTab={'.TAB2'}/>
            <div className="presence">
                
                <ul>
                    <li className="listPresenceItem1">
                        LISTE DE PRESENCE
                    </li>
                    {
                        presenceList.map((user,i)=>(
                            <li key={i} className="listPresenceItem">
                                {user.toString()}
                            </li>
                        ))
                    }
                    
                    
                    <li>
                        <button className="videButton" onClick={emptyList}>VIDER LA LISTE</button>    
                    </li>    
                </ul>
                
            </div>
        </div>
        )
}

export default ListePresence;