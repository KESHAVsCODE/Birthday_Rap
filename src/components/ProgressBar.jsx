import { useSearchParams } from "react-router-dom";
import progressBarStepImages from "../assets/Progress_Bar/progressBarImages";

const ProgressBar = () => {
  const [searchParams] = useSearchParams();
  const step = parseInt(searchParams.get("step")) || 0;

  return (
    <div className="flex justify-center p-4 absolute top-[100%] left-0 right-0">
      <img
        src={progressBarStepImages[step]}
        className="h-[12px]"
        alt="progress-bar-image"
      />
    </div>
  );
};

export default ProgressBar;
