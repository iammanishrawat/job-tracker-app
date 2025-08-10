// AddJob.jsx
import React, { useState } from 'react'

function AddJob({ addJob }) {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !company) return

    const newJob = {
      id: Date.now(),
      title,
      company,
    }

    addJob(newJob) // Call parent function
    setTitle('')
    setCompany('')
  }

  return (
    <div>
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button type="submit">Add Job</button>
      </form>
    </div>
  )
}

export default AddJob
