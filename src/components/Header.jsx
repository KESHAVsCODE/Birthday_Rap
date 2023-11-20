import logo from "../assets/Images/Cadbury_Logo.png";
import birthdaySongLogo from "../assets/Images/BirthdaySong_Logo.png";
import hamburgerIcon from "../assets/Images/Hamburger.png";
const Header = () => {
  return (
    <header className="px-6 bg-purple-950 flex items-center">
      <div>
        <img src={logo} className="w-20" alt="cadbury-logo" />
      </div>
      <div>
        <img
          src={birthdaySongLogo}
          className="w-40"
          alt="my-birthday-song-logo"
        />
      </div>
      <div className="flex-grow flex justify-end items-center cursor-pointer">
        <img src={hamburgerIcon} className="w-8" alt="hamburger-menu-icon" />
      </div>
    </header>
  );
};

export default Header;
