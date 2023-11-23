import {
  PurpleTone,
  PurpleMusicTone,
  YellowTone,
  PartyPoppers,
  RockYellowBG,
} from "../assets/PartyImages/partyImages";
import GenreType from "../assets/Icons/Genre";

const ComposeSongLoading = () => {
  return (
    <div className="h-full text-white font-gibson font-semibold tracking-wide flex flex-col gap-4 justify-center">
      <div className="text-center">
        <img src={PartyPoppers} className="w-20" alt="" />
        <p className="headingText text-xl">Please wait</p>
        <p>while we compose your song...</p>
      </div>
      <div className="w-full flex justify-between">
        <img src={PurpleMusicTone} className="w-10 self-start" alt="" />
        <img src={RockYellowBG} className="w-40" alt="" />
        <img src={YellowTone} className="h-10 self-start -mt-10" alt="" />
      </div>
      <div className="flex justify-between">
        <img src={PurpleTone} className="h-10 self-end" alt="" />
        <img src={PartyPoppers} className="w-20" alt="" />
      </div>
    </div>
  );
};

export default ComposeSongLoading;
