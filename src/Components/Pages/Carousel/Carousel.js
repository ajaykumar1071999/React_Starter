import caroimg from "../../Images/Dal.jpeg";
function Carousel() {
  return (
    <div style={{ backgroundImage: `url(${caroimg})`, width: "100%" }}></div>
  );
}
export default Carousel;
