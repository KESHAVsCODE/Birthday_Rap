import GenreType from "../assets/Icons/Genre";
import MoodType from "../assets/Icons/Mood";
import SingerType from "../assets/Icons/SingerVoice";

const MusicTasteSelector = [GenreType, MoodType, SingerType];
const SongVibeSelector = () => {
  return (
    <section className="-mt-6 grid gap-4">
      {MusicTasteSelector.map((element) => {
        return (
          <div
            key={element}
            className="border border-yellow rounded-lg overflow-hidden"
          >
            <h2 className="bg-yellow font-gibson font-semibold text-purple text-center ">
              Mood
            </h2>
            <div className="flex gap-1 justify-between p-4">
              {element.map((item) => {
                return (
                  <div key={item.type} id={item.type}>
                    <div className="relative w-14 h-14  bg-white rounded-full cursor-pointer">
                      <img
                        src={item.image}
                        className="absolute h-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        alt={item.type}
                      />
                    </div>
                    <p className="pt-1 text-center text-white text-xs font-medium">
                      {" "}
                      {item.type}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SongVibeSelector;
