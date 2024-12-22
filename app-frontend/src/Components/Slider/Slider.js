import headerimage_1 from "../../Images/header2.jpg";
import headerimage_2 from "../../Images/header3.jpg";
import headerimage_3 from "../../Images/header4.jpg";
import headerimage_4 from "../../Images/header5.jpg";
import headerimage_5 from "../../Images/header6.jpg";

import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="main">
        <div className="slider">
          <img src={headerimage_1} alt="" />
          <img src={headerimage_2} alt="" />
          <img src={headerimage_3} alt="" />
          <img src={headerimage_4} alt="" />
          <img src={headerimage_5} alt="" />
        </div>
      </div>
    </>
  );
};
export default Slider;
