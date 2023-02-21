import React, { useContext, useEffect } from "react"
import {UserContext} from '../context'

const Basic  = ({history,match}) => {

    const [state,setState] = useContext(UserContext);

    useEffect(()=>{
        let result = [];

        const check = () => 
        state &&
        state.owner && 
        state.owner.subscriptions &&
        state.owner.subscriptions.map((sub)=>{
            result.push(sub.plan.nickname.toUpperCase())
        });
        check();

        const plan = match.path.split('/')[1].toUpperCase();
        if(!result.includes(plan))
        {
            //history.push("/");
        }
        alert(JSON.stringify(plan))

    },[state&&state.owner])

    return(
    <div>
        <h1>Basic</h1>
    </div>)
}
export default Basic;