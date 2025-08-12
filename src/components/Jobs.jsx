import { useState } from 'react'
import AddJob from '../pages/AddJob'
import AllJobs from '../pages/AllJobs'
import jobsList from '../data/jobsList'


const Jobs = () => {
  const [jobListData, setJobListData] = useState(jobsList)
  const addJob = (newJob) => {
    let existingJobs = [...jobListData, newJob]
    setJobListData(existingJobs)
  }
  return (
    <>
      <AllJobs allJobs={jobListData} />
      <AddJob addJob={addJob} />
    </>
  )
}

export default Jobs
