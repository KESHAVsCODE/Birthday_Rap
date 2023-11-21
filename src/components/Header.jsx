import {
  CadburyLogo,
  BirthdaySongLogo,
  Hamburger,
} from "../assets/PartyImages/partyImages";

import ProgressBar from "./ProgressBar";
const Header = () => {
  return (
    <header className="h-[10vh] px-6 bg-purple-950 flex items-center relative">
      <div>
        <img src={CadburyLogo} className="w-20" alt="cadbury-logo" />
      </div>
      <div>
        <img
          src={BirthdaySongLogo}
          className="w-40"
          alt="my-birthday-song-logo"
        />
      </div>
      <div className="flex-grow flex justify-end items-center cursor-pointer">
        <img src={Hamburger} className="w-8" alt="hamburger-menu-icon" />
      </div>
      <ProgressBar />
    </header>
  );
};

export default Header;
