import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp/SignUp";
import "./styles.css";
import backimg from "./Components/Images/firmbee-com-SpVHcbuKi6E-unsplash.jpg";
import Footer from "./Components/Pages/Footer/Footer";
import Head from "./Components/Pages/Head/Head";
import Content from "./Components/Pages/Content/Content";
import Carousel from "./Components/Pages/Carousel/Carousel";
export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backimg})`,
        height: "150vh",
        backgroundSize: "cover"
      }}
    >
      <BrowserRouter>
        <Head />

        <Content />
      </BrowserRouter>
    </div>
  );
}
