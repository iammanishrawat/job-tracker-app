import { useState } from 'react'

function AddJob() {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')

  const handleSubmit = (e) => {
    // form ko submit k time refresh karne se rokne k liye
    // e.preventDefault()
    // yha se job add karne ka logic likhna hai
    alert('Job added')
  }

  return (
    <>
      {/* yha new job add karne ke liye form hoga  */}

      <form action={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
