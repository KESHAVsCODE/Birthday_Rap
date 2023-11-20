import {
  progressBar,
  progressBar1,
  progressBar2,
  progressBar3,
  progressBar4,
  progressBar5,
} from "../assets/Images/Progress_Bar/progressBarImages";

const ProgressBar = () => {
  return (
    <div className="flex justify-center p-4 absolute w-full">
      <img src={progressBar} className="h-3" alt="progress-bar-image" />
    </div>
  );
};

export default ProgressBar;
