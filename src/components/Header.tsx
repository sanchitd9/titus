import * as React from "react";
import logo from "../assets/logo.png";
import {FaUser} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-black text-white px-8 py-5 flex justify-between items-center">
            <img src={logo} onClick={() => navigate('/')} alt="Titus Precision Logo" className="h-8 w-auto cursor-pointer"/>

            <div className="flex items-center space-x-4">
                <FaUser className="text-2xl cursor-pointer" onClick={() => navigate('/account')}/>
            </div>
        </header>
    );
};

export default Header;