import { useCallback, useRef } from "react";
import Button, { ButtonType } from "./Button";

interface Props {
    text?: string;
    supportText?: string;
    title?: string;
}

const MultipleUploads = ({ title, supportText, text }: Props) => {
    const fileRef = useRef<HTMLInputElement | null>(null);

    const handleSelectFileClick = useCallback(() => {
        if (fileRef) {
            fileRef.current?.click();
        }
    }, [fileRef]);

    return (
        <div className="flex items-center my-4 flex-col lg:flex-row">
            <input type={'file'} className="hidden" ref={fileRef} />
            <Button title={title ?? "Upload Files"} type={ButtonType.greyOutline} onClick={handleSelectFileClick} />
            <div className="flex flex-col flex-1 lg:ml-4">
                <p>{supportText ?? 'Please include any additional information you would like the doctor to know:'}</p>
                <p>{text ?? 'Supported file types: *.jpg, *.png, *.jpeg'}</p>
            </div>
        </div>
    )
}

export default MultipleUploads;
