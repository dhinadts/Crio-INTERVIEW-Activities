import { HiSearch } from "react-icons/hi";
import Doctors from "../../../assets/Doctor.png";
import Labs from "../../../assets/Drugstore.png";
import Hospitals from "../../../assets/Hospital.png";
import MedicalStore from "../../../assets/Capsule.png";
import Ambulance from "../../../assets/Ambulance.png";

import "./Search.css";

const Search = () => {
  return (
    <div className="Search-Container">
      <form
        onSubmit={(e) => {
          console.log("form Submitted");
          e.preventDefault();
        }}
      >
        <div className="input-field">
          <HiSearch />
          <input type="text" placeholder="State" />
        </div>
        <div className="input-field">
          <HiSearch />
          <input type="text" placeholder="City" />
        </div>
        <button
          onClick={() => console.log("button clicked now form will submit")}
          className="searchBtn"
        >
          <HiSearch />
          Search
        </button>
      </form>

      <p className="title">You may be looing for</p>

      <div className="search-category">
        <button
          onClick={() => console.log("You may be looking for Doctors")}
          className="categoryItems"
        >
          <img src={Doctors} alt="Doctors" />
          Doctors
        </button>
        <button
          onClick={() => console.log("You may be looking for Labs")}
          className="categoryItems"
        >
          <img src={Labs} alt="Labs" />
          Labs
        </button>
        <button
          onClick={() => console.log("You may be looking for Hospitals")}
          className="categoryItems"
        >
          <img src={Hospitals} alt="Hospitals" />
          Hospitals
        </button>
        <button
          onClick={() => console.log("You may be looking for Medical Stores")}
          className="categoryItems"
        >
          <img src={MedicalStore} alt="Medical Store" />
          Medical Store
        </button>
        <button
          onClick={() => console.log("You may be looking for Ambulance")}
          className="categoryItems"
        >
          <img src={Ambulance} alt="Ambulance" />
          Ambulance
        </button>
      </div>
    </div>
  );
};

export default Search;
