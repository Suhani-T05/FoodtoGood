
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const baseStyles =
    "rounded-lg px-5 py-3 font-semibold transition duration-200";

  const variants = {
    primary: "bg-[#228B22] text-white hover:bg-green-700",
    secondary: "bg-[#7BA05B] text-white hover:bg-green-800",
    danger: "bg-[#D32F2F] text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {children}
    </button>
  );
}
