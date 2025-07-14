import { twMerge } from "tailwind-merge";

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
  required = false,
  disabled = false,
  value = "",
  onChange,
  ...rest
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={twMerge("input placeholder:text-right")}
        {...rest}
      />
    </div>
  );
};

export default Input;
