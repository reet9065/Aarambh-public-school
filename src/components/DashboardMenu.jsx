import React from 'react'
import "./css/DashboardMenu.css";
import { Link } from 'react-router-dom';
import { LuSchool } from "react-icons/lu";
import { PiChalkboardTeacherBold ,PiStudentBold} from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";

function DashboardMenu() {
  return (
    <div className='menu-list'>
        <Link className="menu-items" to="/">
            <LuSchool className='icons'/>
            <span>Dashboard</span>
        </Link>
        <Link className="menu-items active" to="/Students">
            <PiStudentBold className='icons'/>
            <span>Students</span>
        </Link>
        <Link className="menu-items" to="/Staf">
            <PiChalkboardTeacherBold className='icons'/>
            <span>Staf</span>
        </Link>
        <Link className="menu-items" to="/Result">
            <TbReportAnalytics className='icons'/>
            <span>Result</span>
        </Link>
        <Link className="menu-items" to="/Atendance">
            <FaListCheck className='icons'/>
            <span>Atendance</span>
        </Link>
        <Link className="menu-items" to="/Setting">
            <IoSettingsSharp className='icons'/>
            <span>Setting</span>
        </Link>
    </div>
  )
}

export default DashboardMenu