import { useEffect, useState } from "react"
import JobsList from "../pages/JobsList"
import AddJob from "../pages/AddJob"
const Jobs = () => {
  const [jobPostData, setJobPostData] = useState([])

  const fetchJobDataList = () => {
    fetch('http://localhost:3000/jobs')
    .then((response) => response.json())
    .then((data) => {
      setJobPostData(data)      
    })
    .catch('No Data Found')
  }

  useEffect(() => {
    fetchJobDataList()
  }, [])
  return (
    <>
      <AddJob addNewJobData ={fetchJobDataList} />
      <JobsList jobPostData={jobPostData} />
    </>
  )
}

export default Jobs
