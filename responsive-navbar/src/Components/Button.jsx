
const Button = ({children}) => {
    return (
        <div className="bg-indigo-600 duration-500 text-white py-2 px-6 rounded md:ml-6 hover:bg-indigo-400 ">
            {children}
        </div>
    );
};

export default Button;