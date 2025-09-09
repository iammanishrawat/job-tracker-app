import { useState } from 'react'

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState()
  const [companyName, setCompanyName] = useState()
  const [jobLocation, setJobLocation] = useState()
  const [salary, setSalary] = useState()
  const submitFormHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form action="" onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="Enter Job title"
          value={jobTitle}
          onChange={(e) => {
            setJobTitle(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Location"
          value={jobLocation}
          onChange={(e) => {
            setJobLocation(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddJob
