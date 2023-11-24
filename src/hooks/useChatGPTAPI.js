/* eslint-disable no-undef */
import { useEffect, useState } from "react";

const useChatGPTAPI = (message) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [response, setResponse] = useState("");

  useEffect(() => {
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const apiKey = import.meta.env.VITE_REACT_APP_GPT_KEY; // Replace with your actual API key
    const fetchChatGPT = async () => {
      try {
        setLoading(true);
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
          console.log("------", data.error.message);
          throw new Error(data?.error?.message);
        }
        console.log(data?.choices[0]?.message?.content);
        setResponse(data?.choices[0]?.message?.content);
        setLoading(false);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchChatGPT();
  }, []);

  return { loading, response, error };
};

export default useChatGPTAPI;
