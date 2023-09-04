interface Props {
    label?: string;
    id?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    containerClassName?: string;
    hasError?: boolean;
    errorMessage?: any;
    handleChange?: (val: string) => void;
}

const TextInput = ({ label, id, placeholder, className = '', type = 'text', containerClassName = '', value = '', handleChange, hasError, errorMessage }: Props) => {
    const onChange = (e: any) => {
        handleChange && handleChange(e.target.value);
    };
    return (
        <div className={`my-2 lg:my-4 w-full ${containerClassName}`}>
            <label htmlFor={id} className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">{label}</label>
            <input type={type} id={id} onChange={onChange} className={`rounded-lg block w-full p-2.5 bg-white border ${hasError ? 'border-[red]' : 'border-[#9fdbf3]'} text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 ${className}`} placeholder={placeholder} value={value} required />
            {errorMessage && typeof errorMessage === 'string' && (
                <p className="text-sm text-red-500">{errorMessage}</p>
            )}
            {errorMessage && typeof errorMessage === 'object' && errorMessage.map((item: any) => (
                <p className="text-sm text-red-500">{item}</p>
            ))}
        </div>
    )
};

export default TextInput;