import {FaTrophy } from 'react-icons/fa';
import React from 'react'
import {NavLink} from "react-router-dom";


const SideBar = () => {
    return(
        <div className="fixed top-0 h-screen w-32 bg-black m-0
                        flex-middle flex-col
                        bg-secondary text-white shadow-lg">
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/datapage'><SideBarIcon icon={ <FaTrophy size="32"/> } text = {'Comunnities'}/></NavLink></li>
            </ul>
        </nav>
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:bg-yellow">
            {text}
        </span>
    </div>
);

export default SideBar