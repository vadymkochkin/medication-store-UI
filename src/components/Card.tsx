import Image from "next/image";

interface Props {
    icon?: string;
    iconAlt?: string;
    iconContainerStyle?: string;
    containerStyle?: string;
    headerStyle?: string;
    textStyle?: string;
    iconWidth?: number;
    iconHeight?: number;
    orderNumber?: string;
    header?: string;
    description?: string;
}

const Card = ({ icon, iconAlt, iconWidth, iconHeight, iconContainerStyle, containerStyle, orderNumber, header, description, headerStyle, textStyle }: Props) => {
    return (
        <div className={`flex flex-1 flex-col w-full rounded-xl shadow-xl p-2 lg:p-6 bg-white my-5 lg:m-5 ${containerStyle}`}>
            {icon && (
                <div className={`icon-container rounded-xl items-center p-3 mb-10 mt-6 ${iconContainerStyle}`}>
                    <Image
                        width={iconWidth ?? 42}
                        height={iconHeight ?? 42}
                        src={icon}
                        alt={iconAlt ?? 'Uplink-Health'}
                        className={'icon-content'}
                    />
                    {orderNumber && (
                        <div className="badge-container flex justify-center items-center text-lg font-weight-bold rounded-md">{orderNumber}</div>
                    )}
                </div>
            )}
            <div className="flex flex-1 flex-col pb-5">
                <h1 className={`text-xl lg:text-2xl font-weight-bold my-3 ${headerStyle}`}>{header}</h1>
                <p className={`text-sm lg:text-lg text-gray-600 font-weight-600 mt-3 ${textStyle}`}>{description}</p>
            </div>
        </div>
    );
}

export default Card;