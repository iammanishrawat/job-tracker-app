import { useEffect, useState } from 'react'
import AllJobs from '../pages/AllJobs'
// import AllJobs from '../pages/AllJobs'

const Jobs = () => {
  const [allJobListData, setAllJobListData] = useState([])
  const fetchJobData = () => {
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        setAllJobListData(data)
      })
      .catch((err) => console.error('No Data Found', err))
  }
  useEffect(() => {
    fetchJobData()
  }, [])

  return (
    <>
      <AllJobs allJobListData={allJobListData} />
    </>
  )
}

export default Jobs
