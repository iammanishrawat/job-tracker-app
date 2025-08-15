function AddJob() {
  return (
    <>
      {/* yha new job add karne ke liye form hoga  */}

      <form method="get">
        <label>Title:</label>
        <input type="text" name="title" placeholder="Job Title" required />
        <label>Company:</label>
        <input type="text" name="company" placeholder="Company Name" required />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
