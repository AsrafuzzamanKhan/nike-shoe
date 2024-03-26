
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center px-7 py-4 leading-none text-lg border rounded-full font-montserrat ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "border-coral-red  bg-coral-red text-white"} ${fullWidth && "w-full"
            } `}>{label}
            {iconURL && <img className="ml-2 rounded-full h-5 w-5" src={iconURL} alt="button" />}
        </button>
    )
}

export default Button