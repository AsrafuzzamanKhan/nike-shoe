
const Button = ({ label, iconURL }) => {
    return (
        <button className="flex justify-center items-center px-7 py-4 bg-coral-red leading-none text-lg border  font-montserrat border-coral-red rounded-full text-white">{label}
            {iconURL && <img className="ml-2 rounded-full h-5 w-5" src={iconURL} alt="button" />}
        </button>
    )
}

export default Button