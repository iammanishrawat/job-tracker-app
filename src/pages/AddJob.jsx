function AddJob() {
  return (
    <>
      {/* yha form aayega jisse new jobs list me add hogi */}
      <form action="" className="addjob-from" onSubmit={''}>
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="job title"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="job description"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="company"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="location"
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
