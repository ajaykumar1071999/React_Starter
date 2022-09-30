import {useState} from 'react';
function SignUp()
{
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[mobile,setMobile]=useState("");
const[dob,setDob]=useState("");
const[address,setAddress]=useState("");
function GetData()
{
    console.log(name,eemail,mobile,dob,address);
}
    return(
        <div>
            <h1>SignUp Form</h1>

            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/><br/>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br/><br/>
            <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br/><br/>
            <input type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} name="dob"/><br/><br/>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} name="address"/><br/><br/>
            
            <button onClick={GetData}>GetData</button>
        </div>
    );
}export default SignUp;