import {
  Balloon,
  CapGift,
  PartyPoppers,
  PurpleTone,
} from "../assets/PartyImages/partyImages";
import AgePicker from "./AgePicker";
import UserContext from "../context/UserContextProvider";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const BirthdayPerson = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [age, setAge] = useState(23);

  const [birthdayPersonDetails, setBirthdayPersonDetails] = useState({
    birthdayPersonName: "",
    gender: "Male",
  });

  const [nameError, setNameError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "gender") {
      console.log(value, id);
    }
    setBirthdayPersonDetails({ ...birthdayPersonDetails, [id]: value });
  };
  const handleProceedClick = () => {
    if (!birthdayPersonDetails.birthdayPersonName) {
      setNameError("Please enter your full name");
      return;
    }
    setNameError("");

    setUserPreferencesData({
      ...userPreferencesData,
      ...birthdayPersonDetails,
      age,
    });

    navigate("/song_preference");
  };

  return (
    <section className="mx-auto">
      <div className="max-w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="text-white font-medium">
          Tell us about your loved one...
        </p>
        <div className="w-full flex justify-between items-center">
          <img
            src={PartyPoppers}
            className="w-12 self-end pb-6"
            alt="party-poppers-image"
          />
          <img src={CapGift} className="max-w-[200px]" alt="cap-gift-image" />
          <img src={Balloon} className="w-10" alt="Balloon-image" />
        </div>
      </div>
      {/* ========================================= */}
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-4"
          noValidate
        >
          {/* ========================================= */}
          <p className="text-center text-white tracking-wide font-dairyMilk">
            Their name
          </p>
          <input
            type="text"
            id="birthdayPersonName"
            name="name"
            value={birthdayPersonDetails.name}
            placeholder={nameError || "xxxx xxxx xxxx"}
            className={`text-sm text-purple font-gibson font-semibold  px-4 py-2 rounded-3xl outline-none ${
              nameError ? " placeholder:text-error" : ""
            }`}
            onChange={handleInputChange}
          />

          {/* ========================================= */}
          <p className="text-center text-white tracking-wide font-dairyMilk">
            How old they&rsquo;ll be this birthday
          </p>
          <AgePicker age={age} setAge={setAge} />

          {/* ========================================= */}
          <p className="text-center text-white tracking-wide font-dairyMilk">
            Gender
          </p>
          <div className="relative">
            <select
              id="gender"
              onChange={handleInputChange}
              className="w-full text-sm text-purple px-4 py-2 font-gibson font-semibold text-[]  rounded-3xl outline-none appearance-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <i className="fa-solid fa-caret-down text-purple  absolute right-3 top-2 -translate-x-1/2"></i>
          </div>

          {/* ========================================= */}
          <div className="pt-4 flex justify-center relative">
            <img
              src={PurpleTone}
              className="w-5 absolute left-10"
              alt="yellow-tone-image"
            />
            <button
              type="submit"
              onClick={handleProceedClick}
              className="py-[6px] px-8 font-bold rounded-lg bg-yellow text-purple "
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BirthdayPerson;
