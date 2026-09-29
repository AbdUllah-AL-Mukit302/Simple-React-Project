import { LuCircleDollarSign } from "react-icons/lu";
import Logo from "../logo.png";


const Nav = ({coin}:{coin:number}) => {
    return (
        <nav className="bg bg-white  mx-auto
      max-w-6xl
       px-1">
            <div className="container mx-auto flex justify-between items-center">
                <img src={Logo} alt="Logo" />
                <ul className="flex gap-4 items-center text-black">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
             <div className="flex justify-center items-center">   <h2 className="bold text-3xl font-bold text-black flex items-center"> <LuCircleDollarSign /> {coin}</h2></div>
            </div>
        </nav>
    );
};

export default Nav;