import { useContext, useState } from "react";
import UserContext from "../context/UserContextProvider";
import {
  Celebrations,
  PartyPoppers,
  YellowTone,
} from "../assets/PartyImages/partyImages";

const Registration = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    terms: false,
    promotion: false,
  });

  const [userError, setUserError] = useState({
    nameError: "",
    phoneError: "",
    emailError: "",
    termsError: false,
    promotion: false,
  });

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    console.log(id, value);
    if (id === "phone" && !/^(?!0)[0-9]*$/.test(value)) return;

    setUser({ ...user, [id]: value });
  };

  const handleSubmitClick = () => {
    const error = {
      nameError: user.name ? "" : "Please enter your full name",
      phoneError: user.phone ? "" : "Please enter your phone number",
      emailError: user.email
        ? isValidEmail(user.email)
          ? ""
          : "Enter a valid email address"
        : "Enter your email address",
      termsError: user.terms ? "" : "Please accept terms and conditions",
    };
  };

  return (
    <section name="registration">
      <div className="-mt-[26px] flex justify-center">
        <img
          src={Celebrations}
          className="w-[340px]"
          alt="cadbury-celebration-img"
        />
      </div>
      <div className="mx-auto max-w-[350px] pb-6 -mt-[70px]">
        <p className="pt-1 pb-2 text-center text-white tracking-wide font-dairyMilk">
          Register to create
        </p>

        <form
          id="register"
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
            onChange={handleInputChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder="Email ID"
            className="text-sm px-4 py-2 rounded-3xl outline-none"
            onChange={handleInputChange}
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
              onClick={handleSubmitClick}
              className="px-8 font-bold rounded-lg bg-[#e3b364] text-[#340073] "
            >
              Submit
            </button>
            <img src={YellowTone} className="w-5" alt="yellow-tone-image" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
