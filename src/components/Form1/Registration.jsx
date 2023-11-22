import { useContext, useState } from "react";
import UserContext from "../../context/UserContextProvider";
import {
  Celebrations,
  PartyPoppers,
  YellowTone,
} from "../../assets/PartyImages/partyImages";
import { useNavigate } from "react-router";

const Registration = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    terms: "off",
    promotion: "off",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    phoneError: "",
    emailError: "",
    termsError: "",
    promotion: "",
  });

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "phone" && !/^(?!0)[0-9]*$/.test(value)) return;

    setUser({ ...user, [id]: value });
  };

  const handleSubmitClick = () => {
    const errors = {
      nameError: user.name ? "" : "Please enter your full name",
      phoneError: user.phone
        ? user.phone.length === 10
          ? ""
          : "Phone number should be of 10 digits"
        : "Please enter your phone number",
      emailError: user.email
        ? isValidEmail(user.email)
          ? ""
          : "Enter a valid email address"
        : "Enter your email address",
      termsError:
        user.terms === "on" ? "" : "Please accept terms and conditions",
    };

    if (
      errors.nameError ||
      errors.emailError ||
      errors.phoneError ||
      errors.termsError
    ) {
      //if error exists this will add the respective error messages
      setUserError({ ...userError, ...errors });

      return;
    } else {
      //if error not exists this will remove the previous errors
      setUserError({ ...errors });
    }

    setUserPreferencesData({ ...userPreferencesData, ...user });

    navigate("/birthday_person?step=2");
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
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-4"
          noValidate
        >
          <div>
            <input
              type="tle"
              id="phone"
              name="phone"
              maxLength={10}
              value={user.phone}
              placeholder="Phone Number"
              className={`w-full text-sm px-4 py-2 rounded-3xl outline-none`}
              onChange={handleInputChange}
            />
            {userError.phoneError && (
              <p className="flex gap-2 items-center text-xs text-error">
                <span className="errorSign">!</span>
                {userError.phoneError}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              id="name"
              name="username"
              value={user.name}
              placeholder="Full Name"
              className={`w-full text-sm px-4 py-2 rounded-3xl outline-none`}
              onChange={handleInputChange}
            />
            {userError.nameError && (
              <p className="flex gap-2 items-center text-xs text-error">
                <span className="errorSign">!</span>
                {userError.nameError}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              placeholder={userError.emailError || "Email ID"}
              className={`w-full text-sm px-4 py-2 rounded-3xl outline-none`}
              onChange={handleInputChange}
            />
            {userError.emailError && (
              <p className="flex gap-2 items-center text-xs text-error">
                <span className="errorSign">!</span>
                {userError.emailError}
              </p>
            )}
          </div>

          <div className="px-4 flex items-center gap-4">
            <input type="radio" id="terms" onChange={handleInputChange} />
            <p className={`text-xs text-white`}>
              I accept Terms & Conditions and Privacy Policy of Mondelez
              (Cadbury).
              {userError.termsError && (
                <p className="flex gap-2 items-center text-xs text-error">
                  <span className="errorSign">!</span>
                  {userError.termsError}
                </p>
              )}
            </p>
          </div>

          <div className="px-4 flex items-center gap-4">
            <input
              type="radio"
              required
              id="promotion"
              onChange={handleInputChange}
            />
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
              className="px-8 font-bold rounded-lg bg-yellow text-purple  cursor-pointer"
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
