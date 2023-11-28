/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
const OtpModal = ({ close }) => {
  const [generatedOtp, setGeneratedOtp] = useState("");

  const inputOtpRef = useRef([]);

  const [inputOtp, setInputOtp] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });
  const { digit1, digit2, digit3, digit4 } = inputOtp;

  const [inputOtpError, setInputOtpError] = useState({
    digit1Error: false,
    digit2Error: false,
    digit3Error: false,
    digit4Error: false,
  });
  const { digit1Error, digit2Error, digit3Error, digit4Error } = inputOtpError;

  const [wrongOtpError, setWrongOtpError] = useState(false);

  const navigate = useNavigate();

  const getRandomFourDigitOtp = () => {
    const randomOtp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    setGeneratedOtp(randomOtp + "");
    alert(`Your OTP is ${randomOtp}`);
    console.log(`Your OTP is ${randomOtp}`);
  };

  useEffect(() => {
    getRandomFourDigitOtp();
    const timeId = setTimeout(() => {}, 100);
    return () => clearTimeout(timeId);
  }, []);

  const handleOtpSubmitClick = () => {
    const userInputOtp =
      inputOtp.digit1 + inputOtp.digit2 + inputOtp.digit3 + inputOtp.digit4;
    const errors = {
      digit1Error: !digit1,
      digit2Error: !digit2,
      digit3Error: !digit3,
      digit4Error: !digit4,
    };
    if (!digit1 || !digit2 || !digit3 || !digit4) {
      setInputOtpError(errors);
      return;
    } else {
      setInputOtpError(errors);
      if (generatedOtp === userInputOtp) {
        setWrongOtpError(false);
        close();
        navigate("/birthday_person?step=2");
      } else {
        setWrongOtpError(true);
      }
    }
  };
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    setInputOtp({ ...inputOtp, [id]: value });
    if (/^[0-9]+$/.test(value)) {
      if (inputOtpRef.current.length === index + 1) return;
      inputOtpRef.current[index + 1].focus();
    }
  };

  const handleResendOtpClick = () => {
    getRandomFourDigitOtp();
    inputOtpRef.current[0].focus();
    setWrongOtpError(false);
    setInputOtpError({
      digit1Error: false,
      digit2Error: false,
      digit3Error: false,
      digit4Error: false,
    });

    setInputOtp({
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
    });
  };

  return (
    <div className="p-6 rounded-xl">
      <h3 className="pb-2 text-lg text-center tracking-wide font-gibson font-semibold text-purple">
        Enter OTP
      </h3>

      <ul className="flex gap-3">
        <li>
          <input
            onChange={(e) => handleInputChange(e, 0)}
            ref={(e) => {
              inputOtpRef.current[0] = e;
            }}
            type="text"
            id="digit1"
            value={digit1}
            maxLength={1}
            className={`otpBox ${digit1Error ? "errorBorder" : ""}`}
          />
        </li>
        <li>
          <input
            onChange={(e) => handleInputChange(e, 1)}
            ref={(e) => {
              inputOtpRef.current[1] = e;
            }}
            type="text"
            id="digit2"
            value={digit2}
            maxLength={1}
            className={`otpBox ${digit2Error ? "errorBorder" : ""}`}
          />
        </li>
        <li>
          <input
            onChange={(e) => handleInputChange(e, 2)}
            ref={(e) => {
              inputOtpRef.current[2] = e;
            }}
            type="text"
            id="digit3"
            value={digit3}
            maxLength={1}
            className={`otpBox ${digit3Error ? "errorBorder" : ""}`}
          />
        </li>
        <li>
          <input
            onChange={(e) => handleInputChange(e, 3)}
            ref={(e) => {
              inputOtpRef.current[3] = e;
            }}
            type="text"
            id="digit4"
            value={digit4}
            maxLength={1}
            className={`otpBox ${digit4Error ? "errorBorder" : ""}`}
          />
        </li>
      </ul>

      {wrongOtpError && (
        <p className="flex gap-2 items-center text-xs text-error">
          <span className="errorSign">!</span>
          incorrect OTP!
        </p>
      )}

      <div className="flex justify-end">
        <p
          onClick={handleResendOtpClick}
          className="my-2 text-purple font-gibson tracking-wide font-semibold text-xs text-right underline cursor-pointer"
        >
          Resend OTP
        </p>
      </div>

      <div className="flex justify-center">
        <button onClick={handleOtpSubmitClick} className="defaultButton">
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
