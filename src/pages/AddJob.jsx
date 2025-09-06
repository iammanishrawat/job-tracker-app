const AddJob = () => {
  const handleJobSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form action="" onSubmit={handleJobSubmit}>
        <input type="text" placeholder="Job Title" />
        <input type="text" placeholder="Job Description" />
        <input type="text" placeholder="Job Location" />
        <input type="text" placeholder="Company Name" />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
