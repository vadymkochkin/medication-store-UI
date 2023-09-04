interface Props {
  label?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  rows?: number;
  onChange?: (value: string) => void;
  value?: string;
}

const Textarea = ({ label, id, placeholder, className = '', containerClassName = '', rows = 4, onChange, value = '' }: Props) => {
  const handleChange = (evt: any) => {
    onChange && onChange(evt.target.value);
  };

  return (
    <div className={`my-2 lg:my-4 w-full ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      )}
      <textarea rows={rows} className={`rounded-lg block w-full p-2.5 border border-[#9fdbf3] text-gray-900 text-sm ${className}`} placeholder={placeholder} onChange={handleChange} value={value}></textarea>
    </div>
  )
};

export default Textarea;