export enum ButtonType {
    default = 'default',
    redOutline = 'redOutline',
    greyOutline = 'greyOutline',
}

interface Props {
    title: any;
    containerClassName?: string;
    buttonClassName?: string;
    type?: string;
    activated?: boolean;
    disabled?: boolean;
    isHTMLLabel?: boolean;
    onClick?: () => void;
}
const Button = ({ title, containerClassName, buttonClassName = '', type = '', onClick, activated = false, disabled = false, isHTMLLabel = false }: Props) => {
    let buttonTypeClass = '';
    if (type === ButtonType.default) {
        buttonTypeClass = (disabled ? 'bg-gray-100' : (activated ? 'bg-[#28abe1]' : 'bg-[#e3e3e3]')) + ' rounded-lg mr-2 py-4';
    } else if (type === ButtonType.redOutline) {
        buttonTypeClass = 'text-white ' + (disabled ? 'bg-gray-100' : 'bg-red-600') + ' border-2 border-white shadow-lg outline-white rounded-full text-2xl py-2 pb-4';
    } else if (type === ButtonType.greyOutline) {
        buttonTypeClass = 'text-black ' + (disabled ? 'bg-gray-100' : 'bg-[#ebf3f7]') + ' border-2 border-white shadow-lg outline-white rounded-full text-2xl py-2 pb-4';
    }

    const handleClick = () => {
        if (disabled)
            return;
        onClick && onClick();
    };

    return (
        <div className={`${containerClassName ?? ''} py-2`}>
            {!isHTMLLabel && (
                <div className={`inline-block cursor-default select-none text-sm lg:text-xl pointer-events-auto px-8 font-semibold ${buttonTypeClass} ${buttonClassName ?? ''} ${(disabled ? 'bg-gray-100' : (activated ? 'bg-[#28abe1]' : ''))}`} onClick={handleClick}>
                    {title}
                </div>
            )}
            {isHTMLLabel && (
                <div className={`inline-block cursor-default select-none text-sm lg:text-xl pointer-events-auto px-8 font-semibold ${buttonTypeClass} ${buttonClassName ?? ''} ${(disabled ? 'bg-gray-100' : (activated ? 'bg-[#28abe1]' : ''))}`} onClick={handleClick}>
                    <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </div>
            )}
        </div>
    );
}

export default Button;