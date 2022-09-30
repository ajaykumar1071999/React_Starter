import { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from "./Components/Pages/SignUp/SignUp";
// import Head from "./Components/Pages/Head/Head";
// import Home from "./Components/Pages/Home/Home";
import "./styles.css";
export default function App() {
  // const [data, setData] = useState([]);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [address, setAddress] = useState("");

  // function GetData() {
  //   console.log(name, email, mobile, address);
  // }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
  //     result.json().then((resp) => {
  //       // console.log(resp);
  //       setData(resp);
  //     });
  //   });
  // }, []);
  return (
    <div className="App">
<SignUp/>



























         {/* <BrowserRouter>
         <Routes>
          <Route path="Home" element={<Home/>}>

          </Route>
         </Routes>
         </BrowserRouter>        */}
         
         





      {/* <h1>User Data</h1>
      <h1>Get API Call </h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))}

          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* <input
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
        type="text"
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
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        name="address"
      />
      <br />
      <br />
      <button onClick={GetData}>Get Data</button> */}
    </div>
  );
}
