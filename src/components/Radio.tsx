interface Props {
    label?: string;
    id?: string;
    name?: string;
}

const Radio = ({ label, id, name }: Props) => {
    return (
        <div className="flex items-center my-4">
            <input id={id} type="radio" className="w-4 h-4 text-[#45a46c] bg-gray-100 border-gray-300 rounded " name={name} />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </div>
    )
}

export default Radio;
