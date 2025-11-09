const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
  className = "",
  content = "",
  ...props
}) => {
    const variants = {
        primary: {
            base: "bg-blue-900 text-white rounded-lg",
            hover: "hover:bg-blue-700 rounded-lg",
            clicked: "scale-80 bg-blue-700 rounded-lg shadow-x1/30",
            disabled: "opacity-50 cursor-not-allowed rounded-lg",
        },
        outline: {
            base: "border-2 border-blue-900 text-blue-900 bg-transparent scale-95 rounded-lg",
            hover: "hover:bg-blue-700 hover:text-amber-100 rounded-lg",
            clicked: "scale-80 bg-blue-700 text-amber-100 rounded-lg",
            disabled: "opacity-50 cursor-not-allowed rounded-lg",
        },
        text: {
            base: "border-none outline-none text-blue-900 bg-transparent scale-95 rounded-lg",
            hover: "hover:bg-blue-100 hover:text-blue-700 rounded-lg",
            clicked: "scale-80 bg-blue-100 text-blue-700 rounded-lg",
            disabled: "opacity-50 cursor-not-allowed rounded-lg",
        }
    }

    const sizes = {
        small: "px-3 py-1.5 text-sm w-3/10",
        medium: "px-4 py-2 text-base w-5/10",
        large: "px-6 py-3 text-lg w-8/10",
        xlarge: "px-8 py-4 text-xl w-full",
    }

    const btnClasses = [
        variants[variant].base,
        sizes[size],
        className,
        disabled ? variants[variant].disabled : `${variants[variant].hover} ${variants[variant].clicked}`
    ].join(' ')

    return(
        <button 
            className={btnClasses}
            onClick={onClick}
            type={type}
            disabled = {disabled}
            {...props}
        >
            {content}
        </button>
    )
}

Button.displayName = "Button";

export default Button;