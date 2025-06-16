import caringDoctor1 from "../../assets/caringDoctor1.png";
import caringDoctor2 from "../../assets/caringDoctor2.png";
import callIcon from "../../assets/callIcon.png";
import checkIcon from "../../assets/check.png";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <div className="left-side">
        <img className="img1" src={caringDoctor1} alt="Caring-Doctor" />
        <img className="img2" src={caringDoctor2} alt="Caring-Doctor" />
        <div className="chip dark-blue">
          <span>
            <img src={callIcon} alt="Call" />
            Free Consultation
          </span>
          <div>Consultation with the best</div>
        </div>
      </div>
      <div className="right-side">
        <div className="tag-line blue-font">
          helping patients from around the globe!!
        </div>
        <h3>
          Patient <span className="blue-font">Caring</span>
        </h3>
        <p className="description">
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className="bullet-points">
          <img src={checkIcon} alt="*" />
          Stay Updated about Your Health
        </div>
        <div className="bullet-points">
          <img src={checkIcon} alt="*" />
          Check Your Results Online
        </div>
        <div className="bullet-points">
          <img src={checkIcon} alt="*" />
          Manage Your Appointments
        </div>
      </div>
    </div>
  );
};

export default Summary;
