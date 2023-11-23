/* eslint-disable react/prop-types */
const AgePicker = ({ age, setAge }) => {
  const handleAgeChangeClick = (e) => {
    const id = e.target.id;
    if (id === "increment") {
      setAge((prev) => prev + 1);
    }
    if (id === "decrement") {
      setAge((prev) => (prev === 1 ? prev : prev - 1));
    }
  };

  return (
    <div className="text-purple flex bg-white px-4 py-2 rounded-3xl justify-between">
      <div className="font-gibson text-sm font-semibold">{age} Years</div>
      <div onClick={handleAgeChangeClick} className="flex items-center gap-3">
        <i id="increment" className="fa-solid fa-caret-up"></i>
        <i id="decrement" className="fa-solid fa-caret-down pb-1"></i>
      </div>
    </div>
  );
};

export default AgePicker;
