import UserContext from "../context/UserContextProvider";
import { useEffect, useState } from "react";
import { useContext } from "react";
const CreateSong = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

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
    <div className="mt-10">
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button className="bg-red-500" onClick={handleSubmitClick}>
        submit
      </button>
      <p className="text-white">Response:{response}</p>
    </div>
  );
};

export default CreateSong;
