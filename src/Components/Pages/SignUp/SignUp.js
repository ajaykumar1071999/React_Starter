import { useState } from "react";
var data = [];
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [res, setRes] = useState([]);
  function GetData() {
    let i = res.length;
    data.push({
      i,
      name,
      email,
      mobile,
      dob,
      address
    });
    // console.log(data);
    setRes(data);
    setName("");
    setEmail("");
    setMobile("");
    setDob("");
    setAddress("");
  }
  return (
    <div>
      <h1>SignUp Form</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />
      <br />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="mobile"
      />
      <br />
      <br />
      <input
        type="text"
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
        }}
        name="dob"
      />
      <br />
      <br />
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        name="address"
      />
      <br />
      <br />

      <button onClick={GetData}>GetData</button>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile No</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
          {console.log(res)}
          {res.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.dob}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SignUp;
