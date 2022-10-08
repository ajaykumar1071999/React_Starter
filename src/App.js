import SignUp from "./Components/Pages/SignUp/SignUp";
import "./styles.css";
import img from "./1.jpeg";
export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${img})` }}>
      <SignUp />
      {/* <img src={img} /> */}
    </div>
  );
}
