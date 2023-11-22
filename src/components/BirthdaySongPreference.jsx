import { useContext, useState } from "react";
import {
  Headphone,
  PurpleMusicTone,
  Balloon2,
} from "../assets/PartyImages/partyImages";
import SongVibeSelector from "./SongVibeSelector";
import UserContext from "../context/UserContextProvider";
import { useNavigate } from "react-router";

const BirthdaySongPreference = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const navigate = useNavigate();
  const [musicPreferences, setMusicPreferences] = useState({
    mood: "calm",
    genre: "pop",
    singer: "male",
  });

  const handleProceedClick = () => {
    setUserPreferencesData({ ...userPreferencesData, ...musicPreferences });
    navigate("/birthday_person_interests");
  };
  return (
    <section className="h-[90vh] mx-auto grid grid-rows-customRows">
      <div className="max-w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="px-10 text-center text-white font-medium">
          What would you like their song&rsquo;s vibe to be?
        </p>
        <div className="w-full -mt-4  flex justify-between items-center">
          <img src={PurpleMusicTone} className="w-12 " alt="music-tone-image" />
          <img
            src={Headphone}
            className="max-w-[260px]"
            alt="headphone-image"
          />
          <img src={Balloon2} className="w-12 pb-6" alt="balloon-image" />
        </div>
      </div>

      <SongVibeSelector
        musicPreferences={musicPreferences}
        setMusicPreferences={setMusicPreferences}
      />

      <div
        onClick={handleProceedClick}
        className="absolute left-0 right-0 bottom-0 flex justify-center pt-4 pb-8 bg-purple bg-opacity-5 backdrop-blur-sm"
      >
        <button className="w-max py-3 px-8 text-xl font-bold rounded-lg bg-yellow text-purple ">
          Proceed
        </button>
      </div>
    </section>
  );
};

export default BirthdaySongPreference;
