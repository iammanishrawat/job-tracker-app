import { useState } from "react"

function AddJob({getJobs}) {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newCategory, setNewCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://fakestoreapi.com/products' , {
      method: 'POST',
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
        category: newCategory
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      getJobs()
    })
    .catch((err) => {
      alert('not creating new jobs', err)
    })
  }

  return (
    <>
      {/* yha form aayega jisse new jobs list me add hogi */}
      
      <form action="" className="addjob-from" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          placeholder="Title"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder="Description"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setNewCategory(e.target.value)}
          value={newCategory}
          placeholder="Category"
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
