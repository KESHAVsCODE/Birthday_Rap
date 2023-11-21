import {
  Balloon,
  CapGift,
  PartyPoppers,
  PurpleTone,
} from "../assets/PartyImages/partyImages";
import { useState } from "react";
const BirthdayPerson = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    terms: false,
    promotion: false,
  });
  const handleProceedClick = () => {};
  const handleInputChange = () => {};
  return (
    <section className="mx-auto">
      <div className="w-[350px] mx-auto pt-10 grid justify-items-center">
        <p className="text-white font-medium">
          Tell us about your loved one...
        </p>
        <div className="w-full flex justify-between items-center">
          <img
            src={PartyPoppers}
            className="w-12 self-end pb-6"
            alt="party-poppers-image"
          />
          <img src={CapGift} className="w-[200px]" alt="cap-gift-image" />
          <img src={Balloon} className="w-10 " alt="Balloon-image" />
        </div>
      </div>
      <div className="px-6">
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-4"
          noValidate
        >
          <input
            type="tle"
            id="phone"
            name="phone"
            maxLength={10}
            value={user.phone}
            placeholder="Phone Number"
            className="text-sm  px-4 py-2 rounded-3xl outline-none"
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="name"
            name="username"
            value={user.name}
            placeholder="Full Name"
            className="text-sm px-4 py-2 rounded-3xl outline-none"
            onChange={handleProceedClick}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder="Email ID"
            className="text-sm px-4 py-2 rounded-3xl outline-none"
            onChange={handleProceedClick}
          />

          <div className="px-4 flex items-center gap-4">
            <input type="radio" id="terms" className="" />
            <p className="text-xs text-white">
              I accept Terms & Conditions and Privacy Policy of Mondelez
              (Cadbury)
            </p>
          </div>

          <div className="px-4 flex items-center gap-4">
            <input type="radio" id="promotion" className="" />
            <p className="text-xs text-white">
              I would like to receive promotional communication from Mondelez
              (Cadbury) about its products and offers.
            </p>
          </div>

          <div className="flex justify-between">
            <img
              src={PartyPoppers}
              className="w-10"
              alt="party-poppers-image"
            />
            <button
              type="submit"
              onClick={handleProceedClick}
              className="px-8 font-bold rounded-lg bg-[#e3b364] text-[#340073] "
            >
              Submit
            </button>
            <img src={PurpleTone} className="w-5" alt="yellow-tone-image" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BirthdayPerson;
