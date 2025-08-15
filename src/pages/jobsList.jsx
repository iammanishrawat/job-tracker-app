import { useState } from 'react'
import allJobsData from '../data/allJobsData'

function JobList() {
  const [jobsData, setJobsData] = useState(allJobsData)
  return (
    <>
      {/* yha se job listing map hogi or jitni data mein jobs hogi utni dikhegi */}
      <ul>
        {jobsData.map((jobs) => {
          return (
            <li key={jobs.id}>
              Title: <span>{jobs.title}</span>, Company:{' '}
              <span>{jobs.company}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default JobList
