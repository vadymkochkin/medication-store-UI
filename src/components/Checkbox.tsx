interface Props {
    label?: string;
    id?: string;
    name?: string;
    handleChange?: (val: boolean) => void;
}

const Checkbox = ({ label, id, name, handleChange }: Props) => {
    const onChange = (e: any) => {
        handleChange && handleChange(e.target.checked);
    };

    return (
        <div className="flex items-center my-4">
            <input id={id} type="checkbox" onChange={onChange} className="w-4 h-4 text-[#45a46c] bg-gray-100 border-gray-300 rounded focus:ring-[#45a46c] dark:focus:ring-[#45a46c] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name={name} />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </div>
    )
}

export default Checkbox;
