import React from 'react'
import DashboardMenu from '../components/DashboardMenu'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import "./css/Dashboard.css"


function Dashboard() {
  return (
    <>
        <DashboardMenu/>
        <div className="Dashboard-Content-box">
          <Header/>
          <div className="Dashboard-Content">
              <Outlet/>
          </div>
        </div>
    </>
  )
}

export default Dashboard