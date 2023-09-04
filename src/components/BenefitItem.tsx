import { useState } from "react";
import Divider from "./Divider";

interface Props {
    title?: string;
    description?: string;
    isShow?: boolean;
}

const BenefitItem = ({ title, description, isShow }: Props) => {
    const [show, setShow] = useState(isShow || false);

    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <div className="flex">
            <div className="text-xl lg:text-3xl font-weight-bold mr-5 plus-icon" onClick={handleToggle}>+</div>
            <div className="benefit-content-container" onClick={handleToggle}>
                <div className="benefit-content-title text-md lg:text-3xl font-weight-700">{title}</div>
                <Divider className="my-2 lg:my-4" />
                <p className={`text-sm lg:text-lg text-gray-600 font-weight-600 mb-3 ${show ? 'expaneded' : 'collapsed'}`}>{description}</p>
            </div>
        </div>
    );
};

export default BenefitItem;