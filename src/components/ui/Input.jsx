import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      value,
      onChange,
      error = "",
      disabled = false,
      required = false,
      className = "",   
      labelclassname = "", 
      size = "medium",
      variant = "default",
      maxLength,
      title,
      autoComplete,
      id,
      name,
      ...props
    },
    ref
  ) => {
    
    const sizes = {
      small: "px-3 py-0 text-sm",
      medium: "px-4 py-1 text-base",
      large: "px-5 py-1 text-lg",
    };

    const variants = {
      default:
        "border-2 hover:border-blue-500 focus:border-green-600 bg-white",
      minimal:
        "shadow-xs shadow-blue-500 border-b-2 border-r-2 border-blue-300 rounded-none px-0 focus:border-blue-500",
      ghost:
        "border-b-2 border-b-blue-900 bg-transparent hover:border-b-blue-600 focus:outline-none focus:border-b-blue-600",
    };
        

    return (
      <div className="w-full flex flex-col">

        <label htmlFor={id} className={labelclassname}> {label} </label>

        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          value={value}
          className={variants[variant] + " " + sizes[size] + " " + className}          
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          title={title}
          autoComplete={autoComplete}
          {...props}
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;