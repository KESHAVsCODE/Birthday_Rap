import {
  progressBar,
  progressBar1,
  progressBar2,
  progressBar3,
  progressBar4,
  progressBar5,
} from "../assets/Progress_Bar/progressBarImages";

const ProgressBar = () => {
  return (
    <div className="flex justify-center p-4 absolute top-[100%] left-0 right-0">
      <img src={progressBar} className="h-[12px]" alt="progress-bar-image" />
    </div>
  );
};

export default ProgressBar;
