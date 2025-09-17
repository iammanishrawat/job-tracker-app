import { useState } from "react"

const AddJob = ({addNewJobData}) => {
  const [titleData, setTitleData] = useState("")
  const [companyData, setCompanyData] = useState("")
  const [locationData, setLocationData] = useState("")
  const [salaryData, setSalaryData] = useState("")
  const addJobListDataHandler = (e) => {
    e.preventDefault()
    console.log("submit handler called"); // DEBUG: should appear in console
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleData,
        company: companyData,
        location: locationData,
        salary: salaryData
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      addNewJobData()
    })
    .catch('no input added')
  }
  return (
    <>
      <form onSubmit={addJobListDataHandler} className="addjob-from">
        <input type="text" placeholder="Enter Job Title" value={titleData} onChange={(e) => setTitleData(e.target.value)} />
        <input type="text" placeholder="Enter Company" value={companyData} onChange={(e) => setCompanyData(e.target.value)} />
        <input type="text" placeholder="Enter Location" value={locationData} onChange={(e) => setLocationData(e.target.value)} />
        <input type="text" placeholder="Enter Salary" value={salaryData} onChange={(e) => setSalaryData(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddJob
