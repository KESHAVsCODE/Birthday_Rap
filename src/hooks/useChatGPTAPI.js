/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import generateLyricsPromptMessage from "../functions/generateLyricsPromptMessage";
import { useContext } from "react";
import UserContext from "../context/UserContextProvider";
const useChatGPTAPI = () => {
  const { userPreferencesData, setUserPreferencesData } =
    useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [response, setResponse] = useState("");

  const fetchChatGPT = async () => {
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const apiKey = import.meta.env.VITE_REACT_APP_GPT_KEY; // Replace with your actual API key
    const message = generateLyricsPromptMessage(userPreferencesData);
    try {
      setLoading(true);
      setError("");
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message);
      }
      console.log(data);
      setResponse(data?.choices[0]?.message?.content);
      setLoading(false);
      setError("");
      setUserPreferencesData({
        ...userPreferencesData,
        songLyrics: response,
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatGPT();
  }, []);

  return { loading, response, error, fetchChatGPT };
};

export default useChatGPTAPI;
