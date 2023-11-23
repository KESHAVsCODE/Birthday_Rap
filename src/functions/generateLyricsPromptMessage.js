const generateLyricsPromptMessage = (data) => {
  const {
    // name,
    // phone,
    // age,
    // email,
    // mood,
    // promotion,
    // singer,
    // terms,
    angry,
    birthdayPersonName,
    funniest,
    gender,
    genre,
    movie,
    petname,
    smile,
    sport,
  } = data;

  const nawGender = gender?.toLowerCase();
  const pronouns = {
    possessive:
      nawGender === "male" ? "His" : nawGender === "female" ? "Her" : "Their",
    objective:
      nawGender === "male" ? "him" : nawGender === "female" ? "her" : "them",
    subjective:
      nawGender === "male" ? "he" : nawGender === "female" ? "she" : "they",
  };

  const { possessive, objective, subjective } = pronouns;

  const prompt = `Wish a happy birthday to ${birthdayPersonName}.
 
                ${possessive} pet name is ${petname}.
                
                ${angry} makes ${objective} angry.

                ${funniest} makes ${objective} funniest.
                
                ${smile} makes ${objective} special.
                
                ${movie} movie ${subjective} likes the most.
                
                ${sport} sports ${subjective} likes the most.
                
                Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
                
                Using the above information about ${birthdayPersonName}, please write 16 lines of ${genre} lyrics that I can dedicate to ${objective} for ${possessive} birthday. Each line can have maximum of 8 words or 40 characters.
                
                The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.`;

  return prompt;
};

export default generateLyricsPromptMessage;
