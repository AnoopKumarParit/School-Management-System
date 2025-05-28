import React from 'react'

function ActivityField() {
  return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="font-bold text-xl mb-4 text-blue-700">Activity</h3>
      <p className="mb-2 text-gray-700">📅 3 Appointments for this week </p>
      <div className="flex items-end space-x-1 h-24">
        {[10, 10, 10, 10, 20, 10, 40].map((h, i) => (
          <div
            key={i}
            className="bg-blue-400 w-4 rounded-t"
            style={{ height: `${h}px` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ActivityField