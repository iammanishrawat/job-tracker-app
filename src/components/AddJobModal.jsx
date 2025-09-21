import { useState } from 'react'
const AddJobModal = ({ onClose, onAdded }) => {
  const [titleInput, setTitleInput] = useState('')
  const [companyNameInput, setCompanyNameInput] = useState('')
  const [jobLocationInput, setJobLocationInput] = useState('')
  const [salaryInput, setSalaryInput] = useState('')
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
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // fetchJobData()
        onAdded()
      })
      .catch((err) => console.error('No input', err))
  }
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden={false}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      {/* <h2 className="text-2xl font-bold mb-6">Add New Job</h2> */}
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <form className="space-y-4" onSubmit={formSubmitHandler}>
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
        </form> */}
        <form
          className="space-y-4 bg-white p-4 rounded-lg"
          onSubmit={formSubmitHandler}
        >
          <div>
            <label className="block mb-1">Job Title</label>
            <input
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Company Name</label>
            <input
              value={companyNameInput}
              onChange={(e) => setCompanyNameInput(e.target.value)}
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Location</label>
            <input
              value={jobLocationInput}
              onChange={(e) => setJobLocationInput(e.target.value)}
              className="w-full border px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Salary</label>
            <input
              value={salaryInput}
              onChange={(e) => setSalaryInput(e.target.value)}
              className="w-full border px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddJobModal
