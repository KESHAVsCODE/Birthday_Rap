/* eslint-disable react/prop-types */
import GenreType from "../assets/Icons/Genre";
import MoodType from "../assets/Icons/Mood";
import SingerType from "../assets/Icons/SingerVoice";

// const MusicTasteSelector = [GenreType, MoodType, SingerType];

const SongVibeSelector = ({ musicPreferences, setMusicPreferences }) => {
  const { mood, genre, singer } = musicPreferences;

  const handleMusicPreferenceClick = (e, preferenceType) => {
    const { id } = e.currentTarget;
    setMusicPreferences({ ...musicPreferences, [preferenceType]: id });
  };

  return (
    <section className="-mt-10 overflow-y-scroll pb-20">
      {/* ============================================= */}
      <div className="mb-8 border border-yellow rounded-lg overflow-hidden">
        <h2 className="py-2 text-center text-lg font-gibson font-semibold text-purple   bg-yellow ">
          Mood
        </h2>
        <div className="px-4 py-6 flex gap-1 items-center justify-between ">
          {MoodType.map((item) => {
            return (
              <div key={item.type}>
                <div
                  id={item.type.toLowerCase()}
                  onClick={(e) => handleMusicPreferenceClick(e, "mood")}
                  className={`relative w-14 h-14  ${
                    mood === item.type.toLowerCase() ? "bg-yellow" : "bg-white"
                  } rounded-full cursor-pointer`}
                >
                  <img
                    src={item.image}
                    className="absolute h-8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                    alt={item.type}
                  />
                </div>
                <p className="pt-2 text-center text-white text-[10px] tracking-wide font-medium">
                  {" "}
                  {item.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================== */}
      <div className="mb-8 border border-yellow rounded-lg overflow-hidden">
        <h2 className="py-2 text-center text-lg font-gibson font-semibold text-purple bg-yellow ">
          Genre
        </h2>
        <div className="px-4 py-6 flex gap-1 items-center justify-between">
          {GenreType.map((item) => {
            return (
              <div key={item.type} id={item.type}>
                <div
                  id={item.type.toLowerCase()}
                  onClick={(e) => handleMusicPreferenceClick(e, "genre")}
                  className={`relative w-14 h-14  bg-white rounded-full cursor-pointer ${
                    genre === item.type.toLowerCase() ? "bg-yellow" : "bg-white"
                  }`}
                >
                  <img
                    src={item.image}
                    className="absolute h-16  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                    alt={item.type}
                  />
                </div>
                <p className="pt-2 text-center text-white text-[10px] tracking-wide font-medium">
                  {" "}
                  {item.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* ==================================== */}
      <div className="mb-8 border border-yellow rounded-lg overflow-hidden">
        <h2 className="py-2 text-center text-lg font-gibson font-semibold text-purple bg-yellow ">
          Singer&rsquo;s voice
        </h2>
        <div className="px-4 py-6 flex gap-1 items-center justify-around">
          {SingerType.map((item) => {
            return (
              <div key={item.type} id={item.type}>
                <div
                  id={item.type.toLowerCase()}
                  onClick={(e) => handleMusicPreferenceClick(e, "singer")}
                  className={`relative w-24 h-14  bg-white rounded-lg cursor-pointer ${
                    singer === item.type.toLowerCase()
                      ? "bg-yellow"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={item.image}
                    className="absolute h-12 left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2"
                    alt={item.type}
                  />
                </div>
                <p className="pt-2 text-center text-white text-[10px] tracking-wide font-medium">
                  {" "}
                  {item.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SongVibeSelector;
