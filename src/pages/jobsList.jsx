import { useEffect, useState } from 'react'

const JobsList = () => {
  const [jobListData, setJobListData] = useState([])
  const fetchJobList = () => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobListData(data)
      })
      .catch(() => {
        alert(`no data found`)
      })
  }
  useEffect(() => {
    fetchJobList()
  }, [])
  return (
    <>
      <h1>Jobs</h1>
      <div className="cards-grid">
        {jobListData.map((data) => {
          return (
            <div className="card">
              <h4>Title: {data.title}</h4>
              <p>Company: {data.company}</p>
              <p>Location: {data.location}</p>
              <p>Salary: {data.salary}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobsList
