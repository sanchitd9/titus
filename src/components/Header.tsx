import * as React from "react";
import logo from "../assets/logo.png";
import {FaShoppingCart, FaUser} from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header className="bg-black text-white px-8 py-5 flex justify-between items-center">
            <img src={logo} alt="Titus Precision Logo" className="h-8 w-auto"/>

            <div className="flex items-center space-x-4">
                <FaShoppingCart className="text-2xl cursor-pointer"/>
                <FaUser className="text-2xl cursor-pointer"/>
            </div>
        </header>
    );
};

export default Header;