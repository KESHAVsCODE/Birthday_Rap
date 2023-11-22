import Header from "./components/Header";
import Registration from "./components/Form1";
import BirthdayPerson from "./components";
import BirthdaySongPreference from "./components/Form3";
import BirthdayPersonDetailsForm from "./components/Form4";
import SplashScreen from "./components/SplashScreen";
import { BG } from "./assets/PartyImages/partyImages";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import CreateSong from "./components/CreateSong";
const CustomLayout = () => {
  return (
    <>
      <Header />
      <main className="px-4 h-[90vh] max-w-[400px] mx-auto">
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="min-h-[100vh] bg-cover bg-no-repeat bg-center bg-purple relative"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <Routes>
          <Route index element={<SplashScreen />} />
          <Route path="/" element={<CustomLayout />}>
            <Route path="registration" element={<Registration />} />
            <Route path="birthday_person" element={<BirthdayPerson />} />
            <Route
              path="song_preference"
              element={<BirthdaySongPreference />}
            />
            <Route
              path="birthday_person_interests"
              element={<BirthdayPersonDetailsForm />}
            />
            <Route path="create_song" element={<CreateSong />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
