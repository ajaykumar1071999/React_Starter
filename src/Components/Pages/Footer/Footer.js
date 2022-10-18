import "./Footer.css";
import backimg from "../../Images/job.jpg";
import backimg1 from "../../Images/i-love-coding-xl-1920x1080.jpg";
import backimg2 from "../../Images/helpCenterbgimage.jpg";
import backimg3 from "../../Images/overview.jpg";
function Footer() {
  return (
    <div className="topdiv">
      <div>
        <img src={backimg} />
      </div>
      <div>
        <img src={backimg1} />
      </div>
      <div>
        <img src={backimg2} />
      </div>
      <div>
        <img src={backimg3} />
      </div>
    </div>
  );
}
export default Footer;
