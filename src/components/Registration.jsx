import CelebrationsImg from "../assets/Images/CelebrationsBG.png";
const Registration = () => {
  return (
    <section className="">
      <div className="-mt-8 flex justify-center">
        <img src={CelebrationsImg} className="" alt="cadbury-celebration-img" />
      </div>
      <div className="pb-6 -mt-20">
        <p className="py-1 text-white font-dairyMilk font-medium text-center">
          Register to create
        </p>
        <div className="px-6">
          <form action="" className="grid gap-2" noValidate>
            <input
              type="tle"
              id="phone"
              name="phone"
              maxLength={10}
              placeholder="Phone Number"
              className="text-sm  px-4 py-2 rounded-3xl outline-none"
            />
            <input
              type="text"
              id="name"
              name="username"
              placeholder="Full Name"
              className="text-sm px-4 py-2 rounded-3xl outline-none"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email ID"
              className="text-sm px-4 py-2 rounded-3xl outline-none"
            />

            <div className="px-4 flex items-center gap-4">
              <input type="radio" id="t&c" className="" />
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

            <div className="flex justify-center">
              <button className="w-max px-6 py-2 bg-[#e3b364] text-[#340073] text-sm font-medium rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
