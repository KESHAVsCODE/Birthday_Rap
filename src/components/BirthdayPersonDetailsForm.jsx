import { useState } from "react";
import {
  MessageImg,
  Balloon,
  PartyPoppers,
} from "../assets/PartyImages/partyImages";
const BirthdayPersonDetailsForm = () => {
  const [birthdayPersonInterests, setbirthdayPersonInterests] = useState({
    petname: "",
    angry: "",
    funniest: "",
    smile: "",
    movie: "",
    sport: "",
  });

  const { petname, angry, funniest, smile, movie, sport } =
    birthdayPersonInterests;

  return (
    <section className="h-[90vh] mx-auto">
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

      <div>
        <form
          id="register"
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-4"
          noValidate
        >
          {/* =========================================== */}
          <div className="">
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
            {/* <p className="flex gap-2 items-center text-xs text-error">
              <span className="errorSign">!</span>
              {userDetailsErrors.nameError}
            </p> */}
          </div>

          {/* =========================================== */}
          <p className="text-center text-white tracking-wide font-dairyMilk">
            What makes them angry?
          </p>
          <input
            type="text"
            id="angry"
            value={angry}
            placeholder="xxxx xxxx xxxx"
            className={`text-sm  px-4 py-2 rounded-3xl outline-none`}
            // onChange={handleInputChange}
          />

          {/* =========================================== */}
          <p className="text-center text-white tracking-wide font-dairyMilk">
            What is the funniest thing they do?
          </p>
          <input
            type="text"
            id="funniest"
            value={funniest}
            placeholder="xxxx xxxx xxxx"
            className={`text-sm  px-4 py-2 rounded-3xl outline-none`}
            // onChange={handleInputChange}
          />

          <div className="flex justify-between">
            <button
              type="submit"
              //   onClick={handleSubmitClick}
              className="px-8 font-bold rounded-lg bg-yellow text-purple  cursor-pointer"
            >
              Submit
            </button>
            <button
              type="submit"
              //   onClick={handleSubmitClick}
              className="px-8 font-bold rounded-lg bg-yellow text-purple  cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BirthdayPersonDetailsForm;
