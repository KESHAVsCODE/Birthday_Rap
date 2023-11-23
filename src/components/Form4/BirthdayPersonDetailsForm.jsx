import { useContext, useState } from "react";
import {
  MessageImg,
  Balloon,
  PartyPoppers,
} from "../../assets/PartyImages/partyImages";
import UserContext from "../../context/UserContextProvider";
import { useNavigate } from "react-router";

const BirthdayPersonDetailsForm = () => {
  const navigate = useNavigate();

  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const [birthdayPersonInterests, setBirthdayPersonInterests] = useState({
    petname: "",
    angry: "",
    funniest: "",
    smile: "",
    movie: "",
    sport: "",
  });

  const { petname, angry, funniest, smile, movie, sport } =
    birthdayPersonInterests;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBirthdayPersonInterests({ ...birthdayPersonInterests, [id]: value });
  };

  const handleProceedClick = () => {
    setUserPreferencesData({
      ...userPreferencesData,
      ...birthdayPersonInterests,
    });
    navigate("/create_song?step=5");
  };

  return (
    <section className="h-[90vh] mx-auto grid grid-rows-customRows">
      <div className="max-w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="px-6 headingText">Tell us a little more about them...</p>
        <div className="w-full -mt-4  flex justify-between items-center">
          <img
            src={PartyPoppers}
            className="w-12 self-end mb-8"
            alt="music-tone-image"
          />
          <img
            src={MessageImg}
            className="max-w-[260px]"
            alt="headphone-image"
          />
          <img src={Balloon} className="w-12 mb-6" alt="balloon-image" />
        </div>
      </div>

      <div className="-mt-10">
        <form id="register" className="h-full grid items-center">
          <div className="max-h-[45vh] pb-4 grid gap-6 overflow-y-auto">
            {/* =========================================== */}
            <div>
              <p className="inputLabelText">
                What&rsquo;s your pet name for them
              </p>

              <input
                type="text"
                required
                id="petname"
                value={petname}
                placeholder="xxxx xxxx xxxx"
                className="inputBox"
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="inputLabelText">What makes them angry?</p>
              <input
                type="text"
                required
                id="angry"
                value={angry}
                placeholder="xxxx xxxx xxxx"
                className="inputBox"
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="inputLabelText">
                What is the funniest thing they do?
              </p>
              <input
                type="text"
                required
                id="funniest"
                value={funniest}
                placeholder="xxxx xxxx xxxx"
                className={`inputBox`}
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="inputLabelText">What makes them smile?</p>
              <input
                type="text"
                required
                id="smile"
                value={smile}
                placeholder="xxxx xxxx xxxx"
                className={`inputBox`}
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="inputLabelText">What is the favorite movie?</p>
              <input
                type="text"
                required
                id="movie"
                value={movie}
                placeholder="xxxx xxxx xxxx"
                className={`inputBox`}
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="inputLabelText">Their favorite sport.</p>
              <input
                type="text"
                required
                id="sport"
                value={sport}
                placeholder="xxxx xxxx xxxx"
                className={`inputBox`}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-center">
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

export default BirthdayPersonDetailsForm;
