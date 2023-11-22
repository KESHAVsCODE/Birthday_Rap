import {
  Headphone,
  PurpleMusicTone,
  Balloon2,
} from "../assets/PartyImages/partyImages";
import SongVibeSelector from "./SongVibeSelector";
const BirthdaySongPreference = () => {
  return (
    <section className="h-[90vh] mx-auto">
      <div className="h-[30vh] max-w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="px-10 text-center text-white font-medium">
          What would you like their song&rsquo;s vibe to be?
        </p>
        <div className="w-full -mt-4  flex justify-between items-center">
          <img src={PurpleMusicTone} className="w-12 " alt="music-tone-image" />
          <img
            src={Headphone}
            className="max-w-[200px]"
            alt="headphone-image"
          />
          <img src={Balloon2} className="w-12 pb-6" alt="balloon-image" />
        </div>
      </div>

      <SongVibeSelector />
    </section>
  );
};

export default BirthdaySongPreference;
