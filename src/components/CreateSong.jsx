import UserContext from "../context/UserContextProvider";
import { useEffect } from "react";

import useChatGPTAPI from "../hooks/useChatGPTAPI";

import generateLyricsPromptMessage from "../functions/generateLyricsPromptMessage";
import { useContext } from "react";
import { useNavigate } from "react-router";

const CreateSong = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const navigate = useNavigate();

  const { loading, response, error } = useChatGPTAPI(
    generateLyricsPromptMessage(userPreferencesData)
  );

  useEffect(() => {
    setUserPreferencesData({ ...userPreferencesData, songLyrics: response });
  }, [response, loading]);

  if (loading)
    return (
      <p className="pt-8 headingText place-self-center">
        Your song&rsquo;s lyrics are preparing...
      </p>
    );

  if (error)
    return <p className="pt-8  headingText place-self-center">{error}</p>;

  return (
    <section className="h-[90vh] mx-auto grid  grid-rows-sideBarRows">
      <p className="pt-6  headingText place-self-center">
        Your song&rsquo;s lyrics are ready!
      </p>

      <div className="p-2 bg-white rounded-3xl">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={response}
          disabled
          className="h-full w-full resize-none text-lg p-4 rounded-3xl outline-none"
        ></textarea>
      </div>

      <button
        className="defaultButton self-center justify-self-center"
        onClick={() => navigate("/play_song?step=6")}
      >
        Create Song
      </button>
    </section>
  );
};

export default CreateSong;
