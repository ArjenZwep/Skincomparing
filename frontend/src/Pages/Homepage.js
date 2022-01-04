import useStyles from "../styles";
import Title from "../components/Title";
import Comparison from "../components/Comparison";
import SideBar from "../components/Sidebar";
import React from "react";

function Homepage() {
    return (
        <div className="flex">
            <Title/>
            <Comparison/>
        </div>
    );
}

export default Homepage;
