import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BG, CelebrationsHashtagBG } from "../assets/PartyImages/partyImages";
const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/registration?step=1");
    }, 5000);
  }, []);

  return (
    <section
      className="flex justify-center items-center h-full bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="">
        <div className="flex ">
          <img
            src={CelebrationsHashtagBG}
            className="m-auto object-cover w-full"
            alt="Celebrations Background"
          />
        </div>
        <div className="text-center text-white">
          <p className="font-dairymilk-medium text-lg mb-2">
            A unique birthday song for everyone!
          </p>
          <p className="font-gibson-italic text-sm">
            इस birthday, कुछ अच्छा हो जाए कुछ मीठा हो जाए
          </p>
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
