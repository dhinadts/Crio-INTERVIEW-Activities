import Drugstore from "../../assets/Drugstore.png";
import PrimaryCare from "../../assets/Stethoscope.png";
import Cardiology from "../../assets/Heart Rate.png";
import MRIResourse from "../../assets/Heart Rate Monitor.png";
import BloodTest from "../../assets/Blood Sample.png";
import Piscology from "../../assets/Immune.png";
import XRay from "../../assets/X-Ray.png";
import "./Specialisation.css";

const Specialisation = () => {
  return (
    <div className="Specialisation-container">
        <h2 className="sub-heading">Find By Specialisation</h2>
      <div className="flex">
        <button
          onClick={() => console.log("You may be looking for Dentristry")}
          className="category"
        >
          <img src={Drugstore} alt="Dentistry" />
          Dentistry
        </button>
        <button
          onClick={() => console.log("You may be looking for PrimaryCare")}
          className="category"
        >
          <img src={PrimaryCare} alt="PrimaryCare" />
          Primary Care
        </button>
        <button
          onClick={() => console.log("You may be looking for Cardiology")}
          className="category"
        >
          <img src={Cardiology} alt="Cardiology" />
          Cardiology
        </button>
        <button
          onClick={() => console.log("You may be looking for MRI Resourse")}
          className="category"
        >
          <img src={MRIResourse} alt="MRI Resourse" />
          MRI Resourse
        </button>
      </div>
      <div className="flex">
        <button
          onClick={() => console.log("You may be looking for BloodTest")}
          className="category"
        >
          <img src={BloodTest} alt="BloodTest" />
          Blood Test
        </button>
        <button
          onClick={() => console.log("You may be looking for Piscology")}
          className="category"
        >
          <img src={Piscology} alt="Piscology" />
          Piscology
        </button>
        <button
          onClick={() => console.log("You may be looking for Laboratory")}
          className="category"
        >
          <img src={Drugstore} alt="Laboratory" />
          Laboratory
        </button>
        <button
          onClick={() => console.log("You may be looking for X-Ray")}
          className="category"
        >
          <img src={XRay} alt="X-Ray" />
          X-Ray
        </button>
      </div>

      <button className="view-btn" onClick={() => console.log("Category will appear here")}>View All</button>
    </div>
  );
}

export default Specialisation;
