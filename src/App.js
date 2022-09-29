import { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setData(resp);
      });
    });
  }, []);
  return (
    <div className="App">
      <h1>User Data</h1>
      <h1>Get API Call </h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
          {/* {data.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))} */}

          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
