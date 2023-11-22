/* eslint-disable react/prop-types */
import { SideBarBG, CrossWhite } from "../assets/PartyImages/partyImages";
const SideBar = ({ setSideBarVisible: { closeSideBar, sideBarRef } }) => {
  return (
    <section
      name="sidebar"
      className={`w-full h-screen fixed top-0 left-0 bg-black bg-opacity-60 backdrop-blur z-[9999]`}
    >
      <div
        ref={sideBarRef}
        className="w-[60%] h-full absolute top-0 right-0 bg-white bg-center bg-cover"
        style={{ backgroundImage: `url(${SideBarBG})` }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            closeSideBar();
          }}
          className="absolute top-6 right-6"
        >
          <img src={CrossWhite} className="w-8" alt="close-white-icon" />
        </div>

        <div className="mt-[28vh] grid gap-16 text-white text-lg font-gibson font-semibold tracking-wide">
          <p>How to Participate</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
