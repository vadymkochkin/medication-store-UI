import Image from "next/image";
import { FC } from "react";

interface Props {
  text?: string;
}

const CheckListItem: FC<Props> = ({ text = '' }) => {
  return (
    <div className="flex items-center my-1">
      <Image
        src='/imgs/check.png'
        alt='prescription'
        width={12}
        height={12}
        className={'w-fit h-fit mt-1'}
        priority
      />
      <p className="ml-2 font-weight-500 text-gray-600">{text}</p>
    </div>
  )
}

export default CheckListItem;