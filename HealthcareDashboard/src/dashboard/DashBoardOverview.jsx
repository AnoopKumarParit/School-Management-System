import React from 'react'
import AnatomySection from '../components/AnatomySection'
import HealthStatusCard from '../cards/HealthStatusCard'
function DashBoardOverview({ anatomyStatuses, healthCards }) {
  return (
     <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="font-bold text-xl mb-4 text-blue-700">Body Overview</h3>
      <div className="flex flex-col lg:flex-row">
        <AnatomySection anatomyStatuses={anatomyStatuses} />
        <HealthStatusCard healthCards={healthCards} />
      </div>
    </div>
  )
}

export default DashBoardOverview