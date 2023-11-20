import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Registration from "./components/Registration";
const App = () => {
  return (
    <div className="min-h-[100vh] bg-mainBackground bg-cover bg-no-repeat bg-center">
      <Header />
      <ProgressBar />
      <Registration />
    </div>
  );
};
export default App;
