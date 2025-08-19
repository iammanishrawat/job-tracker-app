import AddJob from '../pages/AddJob'
import JobList from '../pages/jobsList'
import { useEffect, useState } from 'react'

function Jobs() {
  const [jobData, setJobData] = useState([])
  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setJobData(data)
      })
      .catch((error) => {
        alert('no data found', error)
      })
  }
  return (
    <>
      <AddJob getJobs={getJobs} />
      <br />
      <JobList jobData={jobData} />
    </>
  )
}

export default Jobs