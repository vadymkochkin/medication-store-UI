import Image from "next/image";
import { useCallback, useRef } from "react";

interface Props {
  onChange: (files: any) => void;
}

const FileUpload = ({ onChange }: Props) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleSelectFileClick = useCallback(() => {
    if (fileRef) {
      fileRef.current?.click();
    }
  }, [fileRef]);

  // onDragEnter sets inDropZone to true
  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // onDragOver sets inDropZone to true
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // set dropEffect to copy i.e copy of the source item
    e.dataTransfer.dropEffect = "copy";
  };

  // onDrop sets inDropZone to false and adds files to fileList
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // get files from event on the dataTransfer object as an array
    let files = [...e.dataTransfer.files];

    // ensure a file or files are dropped
    if (files && files.length > 0) {
      // loop over existing files
    }
  };

  return (
    <div className="flex flex-col w-full">
      <input type={'file'} className="hidden" ref={fileRef} />
      <div
        className="flex flex-col justify-center items-center my-4 w-full py-4 border-2 border-dashed rounded-lg border-[#3bb2e3]"
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <Image
          src='/imgs/file-drag-and-drop.png'
          alt='profile'
          width={80}
          height={80}
          className={'h-fit mt-4'}
          priority
        />
        <p className="my-2 font-weight-500">Drag & drop files here...</p>
      </div>
      <div className="rounded-lg border-gray-100 bg-[#eaeaea] p-3 flex items-center mb-4" onClick={handleSelectFileClick}>
        <Image
          src='/imgs/file-copy-icon.png'
          alt='file'
          width={16}
          height={16}
          className={'h-fit mr-4'}
          priority
        />
        <p className="font-weight-500">Select Files..</p>
      </div>
    </div>
  )
};

export default FileUpload;