import UserContext from "../context/UserContextProvider";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
const CreateSong = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [response, setResponse] = useState("");

  const handleSubmitClick = () => {
    const fetchChatGPT = async () => {
      try {
        const apiKey = "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"; // Replace with your actual API key
        const prompt = message; // Replace with the prompt you want to send to ChatGPT

        const response = await fetch(
          "https://api.openai.com/v1/engines/davinci/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              prompt: prompt,
              max_tokens: 100, // Adjust token limit as needed
            }),
          }
        );

        const data = await response.json();
        console.log(data);
        if (data && data.choices && data.choices.length > 0) {
          setResponse(data.choices[0].text);
        } else {
          setResponse("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchChatGPT();
  };
  return (
    <section className="h-[90vh] mx-auto grid  grid-rows-sideBarRows">
      <p className="pt-4  headingText place-self-center">
        Your song&rsquo;s lyrics are ready!
      </p>

      <textarea
        name=""
        id=""
        cols="30"
        value={songLyrics}
        rows="10"
        className="text-lg p-4 rounded-3xl outline-none"
      ></textarea>
      {/* <input
        type="text"
        className=" rounded-3xl outline-none"
        onChange={(e) => setMessage(e.target.value)}
      /> */}

      <button
        className="defaultButton self-center justify-self-center"
        onClick={() => navigate("/play_song?step=6")}
      >
        Create Song
      </button>
    </section>
  );
};

const songLyrics = `Happy birthday, cheers to twenty-five shining years,
Celebrating you, spreading joy and cheers.
May your day be filled with laughter and delight,
Wishing you success, everything feels just right.
Blow out the candles, make a wish profound,
In your presence, happiness is always found.
A quarter-century of life, oh what a feat,
May your happiness and dreams always meet.
You're a star, with a future so bright,
Happy 25th birthday, bask in the light.
Here's to friendship, and adventures new,
To the amazing person that is you.
Cake, balloons, and joy all around,
For the guy who makes happiness abound.
A milestone reached, a journey to cherish,
Wishing you joy that will never perish.
Twenty-five years of spreading cheer,
Happy birthday, may it be a fantastic year!
`;

export default CreateSong;
