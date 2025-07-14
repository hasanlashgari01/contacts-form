import { twMerge } from "tailwind-merge";

export const Button = ({ children, type = "button", className, ...rest }) => {
  return (
    <button
      type={type}
      className={twMerge(
        "flex-1 text-white font-medium rounded-lg shadow-md hover:shadow-lg py-3 px-6 transition-all duration-200 cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
