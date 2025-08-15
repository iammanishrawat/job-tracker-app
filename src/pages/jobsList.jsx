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
        alert('list is not available', error)
      })
  }, [])
  return (
    <>
      {/* yha se job listing map hogi or jitni data mein jobs hogi utni dikhegi */}
      <ul>
        {jobData.map((jobs) => {
          return (
            <li key={jobs.id}>
              Title: <span>{jobs.title}</span>, Company:
              <span>{jobs.company}</span>, Location:<span>{jobs.location}</span>
              , Contact: <span>{jobs.contact}</span>,Remote Job:
              <span>{jobs.is_remote_work}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default JobList
