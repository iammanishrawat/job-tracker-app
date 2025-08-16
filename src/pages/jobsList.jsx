import { useEffect, useState } from 'react'

function JobList() {
  const [jobData, setJobData] = useState([])
  useEffect(() => {
    fetch('https://jsonfakery.com/jobs')
      .then((response) => response.json())
      .then((data) => {
        setJobData(data)
      })
      .catch((error) => {
        alert('List is not available'), error
      })
  }, [])
  return (
    <>
      <div className="cards-grid">
        {jobData.map((jobs) => {
          return (
            <div className="card">
              <h5>Job: {jobs.title}</h5>
              <h6>Job Description: {jobs.description}</h6>
              <h6>Company Name: {jobs.company}</h6>
              <h6>Location: {jobs.location}</h6>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobList
