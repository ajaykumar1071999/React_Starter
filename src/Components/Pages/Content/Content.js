import divimg from "../../Images/austin-distel-Imc-IoZDMXc-unsplash.jpg";
import divimg1 from "../../Images/visuals-At7ozqXbq8I-unsplash.jpg";
import divimg2 from "../../Images/i-love-coding-xl-1920x1080.jpg";
import "./Content.css";
import { Link } from "react-router-dom";
function Content() {
  return (
    <div className="contentdiv">
      <Link>
        <div style={{ backgroundImage: `url(${divimg})` }}>1</div>
      </Link>
      <Link>
        <div style={{ backgroundImage: `url(${divimg1})` }}>1</div>
      </Link>
      <Link>
        <div style={{ backgroundImage: `url(${divimg2})` }}>1</div>
      </Link>
      <Link>
        <div style={{ backgroundImage: `url(${divimg1})` }}>1</div>
      </Link>
    </div>
  );
}
export default Content;
