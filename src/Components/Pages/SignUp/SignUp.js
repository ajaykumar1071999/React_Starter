import {useState} from 'react';
function SignUp()
{
const[name,setName]=useState("");
function GetData()
{
    console.log(name);
}
    return(
        <div>
            <h1>SignUp Form</h1>

            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/>
            <button onClick={Getdata}>GetData</button>
        </div>
    );
}export default SignUp;