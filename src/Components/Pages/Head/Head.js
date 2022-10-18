import { Link } from "react-router-dom";
import "./Head.css";
function Head() {
  return (
    <div class="topnav" id="myTopnav">
      <Link>
        <h1>Logo</h1>
      </Link>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
      <Link>Help</Link>

      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}
export default Head;
