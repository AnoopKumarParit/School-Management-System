import React from 'react'
import SimpleAppointmentCard from '../cards/SimpleAppointmentCard'
function UpcomingSchedule({ upcomingAppointments }) {
  return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="font-bold text-xl mb-4 text-blue-700">The Upcoming Schedule</h3>
      <div>
        {upcomingAppointments.map(({ day, appointments }) => (
          <div key={day}>
            <h4 className="font-semibold text-gray-700 mt-4">{day}</h4>
            {appointments.map((title, idx) => (
              <SimpleAppointmentCard key={idx} title={title} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule