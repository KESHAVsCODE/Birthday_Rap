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

  const [errors, setErrors] = useState({
    petnameError: false,
    angryError: false,
    funniestError: false,
    smileError: false,
    movieError: false,
    sportError: false,
  });

  const { petname, angry, funniest, smile, movie, sport } =
    birthdayPersonInterests;
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBirthdayPersonInterests({ ...birthdayPersonInterests, [id]: value });
  };

  const handleProceedClick = () => {
    const error = {
      petnameError: !petname,
      angryError: !angry,
      funniestError: !funniest,
      smileError: !smile,
      movieError: !movie,
      sportError: !sport,
    };
    if (
      error.petnameError ||
      error.angryError ||
      error.funniestError ||
      error.smileError ||
      error.movieError ||
      error.sportError
    ) {
      setErrors({ ...error });
      return;
    } else {
      setErrors({ ...error });
    }

    setUserPreferencesData({
      ...userPreferencesData,
      ...birthdayPersonInterests,
    });
    navigate("/create_song?step=5");
  };

  return (
    <section className="h-[90vh] mx-auto grid grid-rows-customRows">
      <div className="max-w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="px-10 text-center text-white font-medium">
          Tell us a little more about them...
        </p>
        <div className="w-full -mt-4  flex justify-between items-center">
          <img src={PartyPoppers} className="w-12 " alt="music-tone-image" />
          <img
            src={MessageImg}
            className="max-w-[260px]"
            alt="headphone-image"
          />
          <img src={Balloon} className="w-12 pb-6" alt="balloon-image" />
        </div>
      </div>

      <div className="-mt-10">
        <form
          id="register"
          onSubmit={(e) => e.preventDefault()}
          className="h-full grid items-center"
          noValidate
        >
          <div
            onChange={handleInputChange}
            className="max-h-[45vh] pb-4 grid gap-4 overflow-y-auto"
          >
            {/* =========================================== */}
            <div>
              <p className="text-center text-white tracking-wide font-dairyMilk">
                What&rsquo;s your pet name for them
              </p>

              <input
                type="text"
                id="petname"
                value={petname}
                placeholder="xxxx xxxx xxxx"
                className={`w-full text-sm  px-4 py-2 rounded-3xl outline-none`}
                // onChange={handleInputChange}
              />
              {errors.petnameError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  Please enter details
                </p>
              )}
            </div>

            {/* =========================================== */}
            <div>
              <p className="text-center text-white tracking-wide font-dairyMilk">
                What makes them angry?
              </p>
              <input
                type="text"
                id="angry"
                value={angry}
                placeholder="xxxx xxxx xxxx"
                className={`w-full text-sm  px-4 py-2 rounded-3xl outline-none`}
                // onChange={handleInputChange}
              />
              {errors.angryError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  Please enter details
                </p>
              )}
            </div>

            {/* =========================================== */}
            <div>
              <p className="text-center text-white tracking-wide font-dairyMilk">
                What is the funniest thing they do?
              </p>
              <input
                type="text"
                id="funniest"
                value={funniest}
                placeholder="xxxx xxxx xxxx"
                className={`w-full text-sm  px-4 py-2 rounded-3xl outline-none`}
                // onChange={handleInputChange}
              />
              {errors.funniestError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  Please enter details
                </p>
              )}
            </div>

            {/* =========================================== */}
            <div>
              <p className="text-center text-white tracking-wide font-dairyMilk">
                What makes them smile?
              </p>
              <input
                type="text"
                id="smile"
                value={smile}
                placeholder="xxxx xxxx xxxx"
                className={`w-full text-sm  px-4 py-2 rounded-3xl outline-none`}
                // onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="text-center text-white tracking-wide font-dairyMilk">
                What is the favorite movie?
              </p>
              <input
                type="text"
                id="movie"
                value={movie}
                placeholder="xxxx xxxx xxxx"
                className={`w-full text-sm  px-4 py-2 rounded-3xl outline-none`}
                // onChange={handleInputChange}
              />
            </div>

            {/* =========================================== */}
            <div>
              <p className="text-center text-white tracking-wide font-dairyMilk">
                Their favorite sport.
              </p>
              <input
                type="text"
                id="sport"
                value={sport}
                placeholder="xxxx xxxx xxxx"
                className={`w-full text-sm  px-4 py-2 rounded-3xl outline-none`}
                // onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleProceedClick}
              className="py-3 px-8 font-bold rounded-2xl bg-yellow text-purple  cursor-pointer"
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
