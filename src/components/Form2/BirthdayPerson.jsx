import {
  Balloon,
  CapGift,
  PartyPoppers,
  PurpleTone,
} from "../../assets/PartyImages/partyImages";
import AgePicker from "../AgePicker";
import UserContext from "../../context/UserContextProvider";
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
    setBirthdayPersonDetails({ ...birthdayPersonDetails, [id]: value });
  };
  const handleProceedClick = () => {
    if (!birthdayPersonDetails.birthdayPersonName) {
      setNameError("Please enter the name of your birthday person");
      return;
    }
    setNameError("");

    setUserPreferencesData({
      ...userPreferencesData,
      ...birthdayPersonDetails,
      age,
    });

    navigate("/song_preference?step=3");
  };

  return (
    <section className="h-full w-full">
      <div className="max-w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="headingText">Tell us about your loved one...</p>
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
          className="grid gap-6"
          noValidate
        >
          {/* ========================================= */}

          <div className="relative">
            <label htmlFor="birthdayPersonName" className="inputLabelText">
              Their name
            </label>
            <input
              type="text"
              id="birthdayPersonName"
              name="name"
              value={birthdayPersonDetails.name}
              placeholder="xxxx xxxx xxxx"
              className="inputBox font-gibson font-semibold text-purple"
              onChange={handleInputChange}
            />
            {nameError && (
              <p className="absolute flex gap-2 items-center text-xs text-error">
                <span className="errorSign">!</span>
                {nameError}
              </p>
            )}
          </div>

          {/* ========================================= */}
          <div>
            <label className="inputLabelText">
              How old they&rsquo;ll be this birthday
            </label>
            <AgePicker age={age} setAge={setAge} />
          </div>

          {/* ========================================= */}
          <div>
            <label htmlFor="gender" className="inputLabelText">
              Gender
            </label>
            <div className="relative">
              <select
                id="gender"
                onChange={handleInputChange}
                className="inputBox font-gibson font-semibold appearance-none text-purple"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <i className="fa-solid fa-caret-down text-purple  absolute right-3 top-2 -translate-x-1/2"></i>
            </div>
          </div>

          {/* ========================================= */}
          <div className="flex justify-center relative">
            <img
              src={PurpleTone}
              className="h-14 absolute left-5 top-1 "
              alt="yellow-tone-image"
            />
            <button
              type="submit"
              onClick={handleProceedClick}
              className="defaultButton"
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
