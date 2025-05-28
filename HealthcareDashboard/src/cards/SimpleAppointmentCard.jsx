import React from 'react'

function SimpleAppointmentCard({title}) {
  return (
    <div className="border p-3 rounded-lg shadow-sm text-sm mt-2 bg-blue-50 text-blue-900">
      {title} - <span className="font-medium">15:00</span>
    </div>
  )
}

export default SimpleAppointmentCard