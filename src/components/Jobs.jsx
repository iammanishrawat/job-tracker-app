// Jobs.jsx
import React, { useState } from 'react'
import jobsData from '../data/jobsData'
import JobList from '../pages/jobsList'
import AddJob from '../pages/AddJob'

function Jobs() {
  const [allJobs, setAllJobs] = useState(jobsData)

  const addJob = (newJob) => {
    setAllJobs((prevJobs) => [...prevJobs, newJob])
  }

  return (
    <div>
      <JobList allJobs={allJobs} />
      <AddJob addJob={addJob} />
    </div>
  )
}

export default Jobs
