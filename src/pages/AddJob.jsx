import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddJob = () => {
  const [titleInput, setTitleInput] = useState()
  const [companyNameInput, setCompanyNameInput] = useState()
  const [jobLocationInput, setJobLocationInput] = useState()
  const [salaryInput, setSalaryInput] = useState()
  const navigate = useNavigate()
  const formSubmitHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleInput,
        company: companyNameInput,
        location: jobLocationInput,
        salary: salaryInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate('/all-jobs')
      })
      .catch(`No input`)
  }
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Job</h2>
      <form className="space-y-4" onSubmit={formSubmitHandler}>
        <div>
          <label className="block font-medium mb-1">Job Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Frontend Developer"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Google"
            value={companyNameInput}
            onChange={(e) => setCompanyNameInput(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Job Location</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Remote / Bangalore"
            value={jobLocationInput}
            onChange={(e) => setJobLocationInput(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Salary</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 50,000 INR"
            value={salaryInput}
            onChange={(e) => setSalaryInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Job
        </button>
      </form>
    </div>
  )
}

export default AddJob
