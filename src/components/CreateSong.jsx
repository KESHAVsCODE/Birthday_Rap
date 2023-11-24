import useChatGPTAPI from "../hooks/useChatGPTAPI";

import { useNavigate } from "react-router";

const CreateSong = () => {
  const navigate = useNavigate();

  const { loading, response, error, fetchChatGPT } = useChatGPTAPI();

  const handleRecreateLyricsClick = () => {
    if (loading) return;
    fetchChatGPT();
  };

  if (loading)
    return (
      <p className="max-w-[350px] pt-8 headingText place-self-center">
        Your song&rsquo;s lyrics are preparing...
      </p>
    );

  if (error)
    return (
      <p className="pt-8  headingText place-self-center">
        {error && "Something went wrong!"}
      </p>
    );

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

      <div className="flex justify-around items-center">
        <button
          className="defaultButton bg-white bg-opacity-40 text-white"
          onClick={handleRecreateLyricsClick}
        >
          Recreate Lyrics
        </button>
        <button
          className="defaultButton"
          onClick={() => navigate("/play_song?step=6")}
        >
          Create Song
        </button>
      </div>
    </section>
  );
};

export default CreateSong;
