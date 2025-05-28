import React from 'react'
import bg from '../assets/image.png'
function AnotamySection({ anatomyStatuses }) {
  return (
      <div className="lg:w-1/2 pr-4 space-y-2">
      <img src={bg} alt="Anatomy" className="w-full rounded shadow" />
      {anatomyStatuses.map(({ label, status, color }, idx) => (
        <div key={idx} className={`text-sm text-${color}-600`}>{status} {label}</div>
      ))}
    </div>
  )
}

export default AnotamySection