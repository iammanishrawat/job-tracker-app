import { useEffect, useState } from 'react'

const JobsList = () => {
  const [jobListData, setJobListData] = useState([])
  useEffect(() => {
    fetch('https://jsonfakery.com/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobListData(data)
      })
      .catch(() => {
        alert('Data Not found')
      })
  }, [])
  return (
    <>
      <div className="cards-grid">
        {jobListData.map((jobs) => {
          return (
            <div className="card" id={jobs.id}>
              <h2>Job Title: {jobs.title}</h2>
              <p>Job Description: {jobs.description}</p>
              <p>Job Location: {jobs.location}</p>
              <p>Company: {jobs.company}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobsList
