import { useEffect, useState } from 'react'
import JobsList from '../pages/JobsList'
const Jobs = () => {
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
      <JobsList jobListData={jobListData} />
    </>
  )
}

export default Jobs
