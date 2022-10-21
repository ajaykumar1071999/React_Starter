import divimg from "../../Images/austin-distel-Imc-IoZDMXc-unsplash.jpg";
import divimg1 from "../../Images/visuals-At7ozqXbq8I-unsplash.jpg";
import divimg2 from "../../Images/i-love-coding-xl-1920x1080.jpg";
import "./Content.css";
import { Link } from "react-router-dom";
function Content() {
  return (
    <div className="contentdiv">
      <Link>
        <div>
          <img src={divimg} alt="1" />
        </div>
      </Link>
      <Link>
        <div>
          <img src={divimg} alt="1" />
        </div>
      </Link>
      <Link>
        <div>
          <img src={divimg} alt="1" />
        </div>
      </Link>
      <Link>
        <div>
          <img src={divimg} alt="1" />
        </div>
      </Link>
    </div>
  );
}
export default Content;
