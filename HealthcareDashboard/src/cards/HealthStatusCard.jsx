import React from 'react'

function HealthStatusCard({ healthCards }) {
  return (
     <div className="lg:w-1/2 space-y-3 mt-4 lg:mt-0">
      {healthCards.map(({ part, status, date }) => (
        <div key={part} className="p-3 bg-blue-50 rounded-lg shadow text-sm text-blue-800">
          <div className="font-semibold">{part}</div>
          <div>Status: <span className="font-medium text-green-600">{status}</span></div>
          <div>Date: {date}</div>
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCard