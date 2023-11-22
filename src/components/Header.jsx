import {
  CadburyLogo,
  BirthdaySongLogo,
  Hamburger,
} from "../assets/PartyImages/partyImages";
import useClickOutside from "../hooks/useClickOutside";
import SideBar from "./SideBar";

import ProgressBar from "./ProgressBar";
const Header = () => {
  const [sideBar, setSideBar, sideBarRef] = useClickOutside(false);

  const openSideBar = (e) => {
    e.stopPropagation();
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <>
      <header className="h-[10vh] px-6 bg-purple flex items-center relative">
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
        <div
          onClick={openSideBar}
          className="flex-grow flex justify-end items-center cursor-pointer"
        >
          <img src={Hamburger} className="w-8" alt="hamburger-menu-icon" />
        </div>
        <ProgressBar />
      </header>
      {sideBar && (
        <SideBar setSideBarVisible={{ sideBar, closeSideBar, sideBarRef }} />
      )}
    </>
  );
};

export default Header;
