import logoImage from "../../assets/medify-logo.svg";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink to="/" exact className="logo">
        <img src={logoImage} alt="LogoIcon" />
        <span>Medify</span>
      </NavLink>
      <nav className="Navbar">
        <li className="Navbar-items">
          <NavLink to="/findDoctors">Find Doctors</NavLink>
        </li>
        <li className="Navbar-items">
          <NavLink to="/hospitals">Hospitals</NavLink>
        </li>
        <li className="Navbar-items">
          <NavLink to="/medicines">Medicines</NavLink>
        </li>
        <li className="Navbar-items">
          <NavLink to="/surgeries">Surgeries</NavLink>
        </li>
        <li className="Navbar-items">
          <NavLink to="/softwareProvider">Software Provider</NavLink>
        </li>
        <li className="Navbar-items">
          <NavLink to="/facilities">Facilities</NavLink>
        </li>
        <button
          onClick={() => console.log("My Bookings")}
          className="bookingBtn"
        >
          My Bookings
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
