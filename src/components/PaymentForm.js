import {useElements,useStripe} from "@stripe/react-stripe-js"
import React,{useState,useEffect} from "react"


const PaymentForm = () => {

    const [values,setValues] = useState({
        name:'',
        email:''
    })

    const {name,email} = values

    
    const stripe = useStripe()
    const elements = useElements()

    const handleChange = name => (e) => {
        setValues({...values,error:false,[name]:e.target.value})
    }

    const createSubscription = async()=>{
        try
        {
            const paymentMethod = await stripe.createPaymentMethod({
                card:elements.getElement("card"),
                type:"card"
            })
            const response = await fetch("http://localhost:9000/api/membership/subscribe",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    paymentMethod:paymentMethod.paymentMethod.id
                })
            });
            if(!response.ok) return alert("Payment unscessful!")
            const data = await response.json();
            const confirm = await stripe.confirmCardPayment(data.clientSecret);
            if(confirm.error) return ("Payment unsuccesful")
            alert("Payment succesful! subscription is active")
        }
        catch(err)
        {
            console.log(err);
            alert('Payment failed :' + err.message);
        }
    }
    return (
        <div className="part1">
            <h1 className="formTitle">PAYMENT SECTION</h1>
            <input placeholder="full name" className="registerInputFullRegister" type="text" value={name} onChange={handleChange("name")}/>
            <input placeholder="email" className="registerInputFullRegister" type="email" value={email} onChange={handleChange("email")}/>
            <button onClick={createSubscription}>SUBSCRIBE</button>
        </div>
    )
}
export default PaymentForm;