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

  const [answerMore, setAnswerMore] = useState(false);

  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const [birthdayPersonInterests, setBirthdayPersonInterests] = useState({
    petname: "",
    angry: "",
    funniest: "",
    smile: "",
    movie: "",
    sport: "",
    language: "English",
  });

  const { petname, angry, funniest, smile, movie, sport, language } =
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

    if (petname && angry && funniest && smile && movie && sport) {
      navigate("/create_song?step=5");
    }
  };

  return (
    <section className="h-full w-full pt-10">
      <div className="h-[30%]">
        <p className="headingText px-6">Tell us a little more about them...</p>
        <div className="w-full flex justify-between items-center">
          <img
            src={PartyPoppers}
            className="w-12 self-end pb-10"
            alt="music-tone-image"
          />
          <img
            src={MessageImg}
            className=" max-w-[220px]"
            alt="headphone-image"
          />
          <img
            src={Balloon}
            className="w-12 self-start pt-10"
            alt="balloon-image"
          />
        </div>
      </div>

      <div className="h-[70%] ">
        <form onSubmit={(e) => e.preventDefault()} className="h-full">
          <div className="h-[80%] px-2 flex flex-col gap-4 justify-between overflow-y-auto">
            {/* =========================================== */}
            <div>
              <label htmlFor="petname" className="inputLabelText text-lg">
                What&rsquo;s your pet name for them
              </label>

              <input
                type="text"
                required={true}
                id="petname"
                value={petname}
                placeholder="xxxx xxxx xxxx"
                className="inputBox"
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <label htmlFor="angry" className="inputLabelText">
                What makes them angry?
              </label>
              <input
                type="text"
                required={true}
                id="angry"
                value={angry}
                placeholder="xxxx xxxx xxxx"
                className="inputBox"
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}

            <div>
              <label htmlFor="funniest" className="inputLabelText">
                What is the funniest thing they do?
              </label>
              <input
                type="text"
                required={true}
                id="funniest"
                value={funniest}
                placeholder="xxxx xxxx xxxx"
                className={`inputBox`}
                onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            {answerMore && (
              <>
                <div>
                  <label htmlFor="smile" className="inputLabelText">
                    What makes them smile?
                  </label>
                  <input
                    type="text"
                    required={answerMore && true}
                    id="smile"
                    value={smile}
                    placeholder="xxxx xxxx xxxx"
                    className={`inputBox`}
                    onChange={handleInputChange}
                  />
                </div>
                {/* =========================================== */}

                <div>
                  <label htmlFor="movie" className="inputLabelText">
                    What is the favorite movie?
                  </label>
                  <input
                    type="text"
                    required={answerMore && true}
                    id="movie"
                    value={movie}
                    placeholder="xxxx xxxx xxxx"
                    className={`inputBox`}
                    onChange={handleInputChange}
                  />
                </div>
                {/* =========================================== */}
                <div>
                  <label htmlFor="sport" className="inputLabelText">
                    Their favorite sport.
                  </label>
                  <input
                    type="text"
                    required={answerMore && true}
                    id="sport"
                    value={sport}
                    placeholder="xxxx xxxx xxxx"
                    className={`inputBox`}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
            <div>
              <label htmlFor="language" className="inputLabelText">
                Select language of the lyrics
              </label>
              <div className="relative">
                <select
                  id="language"
                  value={language}
                  onChange={handleInputChange}
                  className="inputBox font-gibson font-semibold appearance-none text-purple"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
                <i className="fa-solid fa-caret-down text-purple absolute right-3 top-1/2 -translate-x-1/2 -translate-y-1/2"></i>
              </div>
            </div>
          </div>

          <div className="h-[20%] flex px-2 justify-around items-center">
            <button
              onClick={() => setAnswerMore((prev) => !prev)}
              className="defaultButton px-4 text-white bg-white bg-opacity-40"
            >
              Answer More
            </button>

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
