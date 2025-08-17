import AddJob from '../pages/AddJob'
import JobList from '../pages/jobsList'
import { useEffect, useState } from 'react'

function Jobs() {
  const [jobData, setJobData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setJobData(data)
      })
      .catch((error) => {
        alert('no data found', error)
      })
  }, [])
  return (
    <>
      <AddJob />
      <JobList jobData={jobData} />
    </>
  )
}

export default Jobs
