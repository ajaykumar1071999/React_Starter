import { Link } from "react-router-dom";
import "./Head.css";
function Head() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div class="topnav" id="myTopnav">
      <Link>
        <h4>Logo</h4>
      </Link>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
      <Link>Help</Link>

      <a href="javascript:void(0);" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}
export default Head;
