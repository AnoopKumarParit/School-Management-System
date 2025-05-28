import React from 'react'

function CalendarView({ calendarAppointments, appointmentDetails }) {
  return (
     <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="font-bold text-xl mb-4 text-blue-700">May 2025</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-sm">
        {[...Array(31)].map((_, i) => (
          <div key={i} className="border rounded p-3 hover:bg-blue-50">
            <div className="font-semibold">{i + 1}</div>
            {calendarAppointments[i + 1]?.times && (
              <div className="text-xs mt-2 text-blue-600">
                {calendarAppointments[i + 1].times.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {appointmentDetails.map(({ icon, text, bgColor, textColor }, idx) => (
          <div key={idx} className={`p-2 ${bgColor} rounded ${textColor}`}>{icon} {text}</div>
        ))}
      </div>
    </div>
  )
}

export default CalendarView