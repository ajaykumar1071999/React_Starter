import { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        // setData(resp);
      });
    });
  });
  return (
    <div className="App">
      <h1>User Data</h1>
      {data.map((item) => {
        <h3>item.userId</h3>;
      })}
    </div>
  );
}
