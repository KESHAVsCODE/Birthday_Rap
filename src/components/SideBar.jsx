/* eslint-disable react/prop-types */
import {
  BG,
  CrossWhite,
  MDLZ_SMR_Logo,
} from "../assets/PartyImages/partyImages";
const SideBar = ({ setSideBarVisible: { closeSideBar, sideBarRef } }) => {
  return (
    <section
      name="sidebar"
      className={`w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 backdrop-blur z-[999]`}
    >
      <div
        ref={sideBarRef}
        className="max-w-[350px] w-[60%] h-full ml-auto grid grid-rows-sideBarRows bg-purple bg-center bg-cover"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            closeSideBar();
          }}
          className="justify-self-end cursor-pointer"
        >
          <img
            src={CrossWhite}
            className="w-8 mt-6 mr-6"
            alt="close-white-icon"
          />
        </div>

        <div className="self-center">
          <p className="sideBarItems border-t">How to Participate</p>
          <p className="sideBarItems">Terms & Conditions</p>
          <p className="sideBarItems">Privacy Policy</p>
          <p className="sideBarItems">Contact Us</p>
        </div>

        <div className="flex items-center justify-center bg-white">
          <img src={MDLZ_SMR_Logo} className="w-40" alt="MDLZ_SMR_Logo" />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
