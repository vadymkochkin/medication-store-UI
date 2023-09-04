import { useState } from "react";

interface Props {
    title?: string;
    description?: string | any;
    isShow?: boolean;
}

const FaqItem = ({ title, description, isShow }: Props) => {
    const [show, setShow] = useState(isShow || false);

    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <div className="flex w-full my-3">
            <div className="faq-content-container w-full">
                <div className="faq-content-title flex justify-between bg-[#dff6fe] px-6 py-4 rounded-lg" onClick={handleToggle}>
                    <p className="text-sm lg:text-xl font-weight-700">{title}</p>
                    <p className="text-xl lg:text-4xl font-weight-700 text-[#16a44f]">{show ? '-' : '+'}</p>
                </div>
                {show && (
                    <div className="p-4">
                        {typeof description === 'object' && description.map((t: any, index: number) => (
                            <p className={`text-sm lg:text-lg text-gray-600 font-weight-600 mb-3 ${show ? 'expaneded' : 'collapsed'}`} key={'faq_description_' + index}>{t}</p>
                        ))}
                        {typeof description === 'string' && (
                            <p className={`text-sm lg:text-lg text-gray-600 font-weight-600 mb-3 ${show ? 'expaneded' : 'collapsed'}`}>{description}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FaqItem;