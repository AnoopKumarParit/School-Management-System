import React from 'react'
import DashBoardOverview from './DashBoardOverview'
import CalendarView from '../components/CalendarView'
import UpcomingSchedule from '../components/UpcomingSchedule'
import ActivityField from '../components/ActivityField'
function DashBoardMainContent({ anatomyStatuses, healthCards, calendarAppointments, appointmentDetails, upcomingAppointments }) {
  return (
     <main className="p-4 sm:p-6 overflow-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 space-y-6">
        <DashBoardOverview anatomyStatuses={anatomyStatuses} healthCards={healthCards} />
        <CalendarView calendarAppointments={calendarAppointments} appointmentDetails={appointmentDetails} />
        <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
      </section>
      <section className="space-y-6">
        <ActivityField />
      </section>
    </main>
  )
}

export default DashBoardMainContent