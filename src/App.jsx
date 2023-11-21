import Header from "./components/Header";
import Registration from "./components/Registration";
import BirthdayPerson from "./components/BirthdayPerson";
import { BG } from "./assets/PartyImages/partyImages";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const CustomLayout = () => {
  return (
    <>
      <Header />
      <main className="h-[90vh] max-w-[400px] mx-auto">
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="min-h-[100vh] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <Routes>
          <Route path="/" element={<CustomLayout />}>
            <Route index element={<Registration />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
