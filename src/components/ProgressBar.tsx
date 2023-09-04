import { FC } from "react";

interface Props {
  total?: number;
  current?: number;
}

const ProgressBar: FC<Props> = ({ current = 0, total = 1 }) => {
  return (
    <div className="w-full border-2 border-[#16a44f] p-[0.1rem] rounded-lg">
      <div className="w-full h-12 bg-gray-200 rounded-md dark:bg-gray-700 progress-bar-bg">
        <div className="bg-[#28abe1] text-xs font-medium text-white text-center h-12 leading-none rounded-md flex items-center justify-center font-weight-bold" style={{ width: (current * 100 / total) + "%" }}>{current} of {total}</div>
      </div>
    </div>
  );
};

export default ProgressBar;