import { useState } from 'react'
import './App.css';
import SideBar from './components/SideBar'
import Header from './components/Header'
import DashBoardMainContent from './dashboard/DashBoardMainContent'
import { navLinks } from './mockData/NavLinks';
import { anatomyStatuses, healthCards } from './mockData/HealthData';
import { calendarAppointments, appointmentDetails } from './mockData/Appointments';
import { upcomingAppointments } from './mockData/UpComingAppointments';


function App() {

  return (
    <div className="flex h-screen">
      <SideBar links={navLinks} />
      <div className="flex flex-col flex-1 bg-blue-700">
        <Header></Header>
        <DashBoardMainContent
          anatomyStatuses={anatomyStatuses}
          healthCards={healthCards}
          calendarAppointments={calendarAppointments}
          appointmentDetails={appointmentDetails}
          upcomingAppointments={upcomingAppointments}
        />
      </div>
    </div>
  )
}

export default App
