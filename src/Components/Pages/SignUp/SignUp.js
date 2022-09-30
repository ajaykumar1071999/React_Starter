import {useState} from 'react';
function SignUp()
{
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[Mobile,setMobile]=useState("");
const[dob,setDob]=useState("");
const[address,setAddress]=useState("");
function GetData()
{
    console.log(name);
}
    return(
        <div>
            <h1>SignUp Form</h1>

            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
            <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/>
            <input type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} name="dob"/>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} name="address"/>
            
            <button onClick={GetData}>GetData</button>
        </div>
    );
}export default SignUp;