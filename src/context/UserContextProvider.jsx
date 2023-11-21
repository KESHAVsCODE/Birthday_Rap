import { createContext, useState } from "react";
const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [userPreferencesData, setUserPreferencesData] = useState({});
  return (
    <UserContext.Provider
      value={{ userPreferencesData, setUserPreferencesData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
